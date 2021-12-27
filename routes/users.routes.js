const express = require("express");
const router = express.Router();
const UsersModel = require("../models/users.model");

//GET users listing
router.get("/", async (req, res) => {
  try {
    const users = await UsersModel.find();
    //send the json response
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});

// GET one user
router.get("/:id", async (req, res) => {
  try {
    const testLoggedUser = await UsersModel.findById(
      "61ca3389158195087f34e59c"
    );
    console.log(testLoggedUser);
    res.status(200).json(testLoggedUser);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
