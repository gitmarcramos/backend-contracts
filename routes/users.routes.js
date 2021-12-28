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

// CREATE user
router.post("/create-user", async (req, res) => {
  try {
    const checkUser = await UsersModel.findOne({ email: req.body.email });

    if (checkUser) {
      console.log("User already exists");
    } else {
      const allUsers = await UsersModel.find();
      const newUser = await UsersModel.create({ ...req.body });
      console.log(newUser);
      res.status(200).json(newUser);
    }
  } catch (err) {
    console.log(err, "User not created");
  }
});

// GET one user
router.get("/:id", async (req, res) => {
  try {
    const testLoggedUser = await UsersModel.findById(req.params.id);
    console.log(testLoggedUser);
    res.status(200).json(testLoggedUser);
  } catch (e) {
    console.log(e);
  }
});

//PATCH one user
router.patch("/:id/edit", async (req, res) => {
  try {
    const updateUser = await UsersModel.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (e) {
    console.log(e, "There was an error updating your account");
  }
});

//DELETE user
router.delete("/:id/delete", async (req, res) => {
  try {
    const deleteUser = await UsersModel.findOneAndDelete({
      id: req.params.id,
    });
    res.status(200).json(deleteUser);
  } catch (e) {
    console.log(e), "User not deleted";
  }
});

module.exports = router;
