const express = require('express');
const router = express.Router();

//Index 
router.get("/", (req, res) => {
  res.send("Get for users");
})

//show - users 
router.get("/:id", (req, res) => {
  res.send("Get for show user ID");
})

// POST - users
router.get("/", (req, res) => {
  res.send("Post  for users");
})

//delete- users 
router.get("/:id", (req, res) => {
  res.send("DELETE for show user ID");
})

module.exports = router;