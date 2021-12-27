require("dotenv").config();
require("../../config/mongo");
const ContractsModel = require("../../models/contracts.model");
const UsersModel = require("../../models/users.model");

const contracts = [
  {
    contractNumber: 1,
    status: "pending",
    startDate: new Date(Date.now()),
    endDate: new Date("2023"),
  },
  {
    contractNumber: 2,
    status: "pending",
    startDate: new Date(Date.now()),
    endDate: new Date("2023"),
  },
  {
    contractNumber: 3,
    status: "pending",
    startDate: new Date(Date.now()),
    endDate: new Date("2023"),
  },
];

(async function insertTestContract() {
  try {
    await ContractsModel.deleteMany();
    const user = await UsersModel.findOne({ name: "Marie Wang" });
    contracts[0].clients = user._id;
    const inserted = await ContractsModel.insertMany(contracts);
    console.log(user.name, inserted[0]);
    console.log(`${contracts.length} contracts inserted!`);
    process.exit()
  } catch (e) {
    console.log(e, "Damn, seed contracts not inserted!");
  }
})();
