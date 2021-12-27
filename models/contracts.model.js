const { Schema, model } = require("mongoose");

const contractsSchema = new Schema({
  clients: [{ type: Schema.Types.ObjectId, ref: "users" }],
  contractNumber: { type: Number, required: true },
  status: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  options: [{ type: Schema.Types.ObjectId, ref:"options"}]
});

const contractsModel = model("contracts", contractsSchema);
module.exports = contractsModel;
