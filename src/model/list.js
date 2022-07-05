const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
});

const Lists = mongoose.model("lists", listSchema);

module.exports = Lists;
