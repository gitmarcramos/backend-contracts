const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, trim: true },
  role: {
    type: String,
    required: true,
    enum: ["admin", "client"],
    default: "client",
    trim: true,
  },
  password: { type: String, required: true },
  contracts: [{ type: Schema.Types.ObjectId, ref: "contracts" }],
});

const usersModel = mongoose.model("users", usersSchema);
module.exports = usersModel;
