const express = require("express");
const router = express.Router();
const ContractModel = require("../models/contracts.model");

// Get contract page
router.get("/", async (req, res, next) => {
  try {
    const contracts = await ContractModel.find();
    console.log(contracts);
    res.status(200).json(contracts);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
