const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  console.log("Welcome to the home page");
  res.render("index", { title: "Express" });
});

module.exports = router;
