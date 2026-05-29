const express = require('express');
const router = express.Router();



//posts
//Index 
router.get("/posts", (req, res) => {
  res.send("Get for posts");
})

//show 
router.get("/posts/:id", (req, res) => {
  res.send("Get for post id");
})

// POST 
router.get("/posts", (req, res) => {
  res.send("Post  for posts");
})

//delete- users 
router.get("/posts/:id", (req, res) => {
  res.send("DELETE for post id");
})

module.exports = router;