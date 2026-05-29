const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../views/middleware");

const reviewController = require("../classroom/controllers/reviews.js");

//Review
//Post Route
router.post("/",
  isLoggedIn,
   validateReview, 
   wrapAsync(reviewController.createReview));

//delete Post Route
router.delete("/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview));


module.exports = router;