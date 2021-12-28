const express = require("express");
const { now } = require("mongoose");
const router = express.Router();
const ContractModel = require("../models/contracts.model");
const OptionsModel = require("../models/options.model");
const UserModel = require("../models/users.model");

//! CREATE
//POST new contract page
router.post("/create-contract", async (req, res, next) => {
  try {
    const checkContractNumber = await ContractModel.find({
      contractNumber: req.body.contractNumber,
    });

    if (checkContractNumber[0] === undefined) {
      const newContract = await ContractModel.create({
        ...req.body,
        startDate: new Date(Date.now()),
      });
      console.log(`Contract number ${req.body.contractNumber} created!`);
      res.status(200).json(newContract);
    } else {
      console.log(
        `Contract number ${checkContractNumber[0].contractNumber} already exists!`
      );
    }
  } catch (e) {
    console.log(e);
  }
});

//! READ
// Get contract page
router.get("/", async (req, res, next) => {
  try {
    const contracts = await ContractModel.find();
    res.status(200).json(contracts);
  } catch (err) {
    console.log(err);
  }
});

//! UPDATE (PATCH)
// PATCH one contract
router.patch("/update-contract", async (req, res, next) => {
  try {
    const contractNumber = await ContractModel.findOne({
      contractNumber: req.body.contractNumber,
    });

    if (!contractNumber) {
      const updatedContract = await ContractModel.findOneAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedContract);
    } else {
      console.log('Contract number alreday exists');
    }
  } catch (e) {
    console.log(e, "Contract not updated");
  }
});

//! DELETE
router.delete("/delete-contract", async (req, res, next) => {
  try{
    const deleteContract = await ContractModel.findOneAndDelete({
      _id: req.body.id
    })
    res.status(200).json(deleteContract);
  }catch (e) {
    console.log(e);
  }
})

module.exports = router;
