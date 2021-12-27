require("dotenv").config();
require("../../config/mongo");
const OptionsModel = require("../../models/options.model");

const contractOptions = [
  {
    identifier: "Technophile",
    description: "Technophile option",
  },
  {
    identifier: "Tout risque",
    description: "Tout risque option",
  },
  {
    identifier: "Voyage",
    description: "Voyage option",
  },
  {
    identifier: "Assurance habitation",
    description: "Assurance habitation option",
  },
  {
    identifier: "Premium",
    description: "Premium option",
  },
];

(async function insertTestOptions() {
  try {
    await OptionsModel.deleteMany();
    const options = await OptionsModel.insertMany(contractOptions);
    console.log(`${contractOptions.length} options successfully insterted!`);
    process.exit()
  } catch (e) {
    console.log(e, "damn, seed options not insterted!");
  }
})();
