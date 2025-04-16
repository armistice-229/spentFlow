const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["Revenu", "Dépense"],
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
