require("dotenv").config();
require("../../config/mongo");
const UsersModel = require("../../models/users.model");

const users = [
  {
    name: "John Doe",
    email: "thejohn@doe.com",
    role: "admin",
    password: "azerty",
  },
  {
    name: "Marie Wang",
    email: "marie@wang.com",
    password: "azerty2",
  },
];

(async function insertTestUsers() {
  try {
    await UsersModel.deleteMany();
    const inserted = await UsersModel.insertMany(users);
    console.log(inserted[1]);
    console.log(`${users.length} users inserted!`);
    process.exit()
  } catch (e) {
    console.log(e, "Seed users not inserted bro...");
  }
})();
