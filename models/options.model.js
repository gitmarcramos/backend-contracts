const { Schema, model } = require("mongoose");

const optionsSchema = new Schema({
  identifier: { type: String, required: true },
  description: { type: String, required: true },
  contracts: [{ type: Schema.Types.ObjectId, ref: "contracts" }],
});


const optionsModel = model("options", optionsSchema);
module.exports = optionsModel;
