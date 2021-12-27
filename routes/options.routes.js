const express = require("express");
const router = express.Router();
const OptionsModel = require("../models/options.model");

// GET options page
router.get("/", async (req, res) => {
  try {
    const options = await OptionsModel.find();
    console.log(options);
    res.status(200).json(options);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;