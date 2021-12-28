const express = require("express");
const router = express.Router();
const ContractModel = require("../models/contracts.model");
const OptionsModel = require("../models/options.model");
const UserModel = require("../models/users.model");

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

//GET new contract page
router.get("/new-contract", (req, res, next) => {
  res.send("New contract page");
});

// POST new contract
router.post("/new-contract", async (req, res, next) => {
  try {
    const newContract = {
      ...req.body,
      startDate: new Date(Date.now()),
    };
    const newDBContract = await ContractModel.create(newContract);
    console.log(newDBContract);
  } catch (e) {
    console.log(e), "New contract NOT created";
  }
});

module.exports = router;
