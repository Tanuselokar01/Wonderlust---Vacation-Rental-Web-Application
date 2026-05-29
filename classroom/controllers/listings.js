const Listing = require("../../models/listing"); // 2 levels up
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const baseClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm= (req,res) => {
  res.render("listings/new");

}

module.exports.showListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you are requested for does not exist!");
    return res.redirect("/listings");
  }

  console.log(listing);

  res.render("listings/show", {
    listing,
    currUser: req.user,
    mapToken: process.env.MAP_TOKEN   // ✅ FIX
  });
};


module.exports.createListing = async (req, res, next) => {

  const response = await baseClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
  }).send();

  const geoData = response.body.features[0];

  if (!geoData) {
    req.flash("error", "Invalid location");
    return res.redirect("/listings/new");
  }

  if (!req.file) {
    req.flash("error", "Image upload failed");
    return res.redirect("/listings/new");
  }

  const { listing } = req.body;

  const newListing = new Listing({
    title: listing.title,
    description: listing.description,
    price: listing.price,
    country: listing.country,
    location: listing.location,

    owner: req.user._id,

    image: {
      url: req.file.path,
      filename: req.file.filename
    },

    geometry: {
      type: "Point",
      coordinates: geoData.geometry.coordinates
    }
  });

  await newListing.save();

  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};


module.exports.renderEditForm = (async(req,res)=>{
let {id}=req.params;
const listing = await Listing.findById(id);
 if(!listing){
    req.flash("error", "Listing you are requested for does not exist!");
    return res.redirect("/listings"); // ✅ return stops execution
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_250");
res.render("listings/edit.ejs",{listing ,originalImageUrl});
});


module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  // Use lowercase variable, do NOT shadow the model
  let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

  if (req.file) { // simpler check
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`); // lowercase path consistent
};

module.exports.destroyListing = (async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/Listings");  // after deleting, go back to index
});