const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync")
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner ,validateListing} = require("../views/middleware.js");

const listingController = require("../classroom/controllers/listings.js");
//index rout
// debug check
console.log("Controller:", listingController);
console.log("Index:", typeof listingController.index);
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })


router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("image"),  // <-- add this back
    wrapAsync(listingController.createListing)
  );

// NEW LISTING ROUTE
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,
  isOwner,
  upload.single("image"),
  validateListing,
  wrapAsync(listingController.updateListing))
.delete(
  isLoggedIn,
  isOwner,
   wrapAsync(listingController.destroyListing))


//Edit Rout
router.get("/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm )
);



module.exports = router;