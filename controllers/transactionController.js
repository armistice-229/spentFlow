const Transaction = require("../models/Transaction");

// 🔁 Obtenir toutes les transactions d’un utilisateur
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur." });
  }
};

// ➕ Ajouter une transaction
exports.addTransaction = async (req, res) => {
  const { description, amount, category, type, date } = req.body;
  try {
    const transaction = await Transaction.create({
      user: req.user._id,
      description,
      amount,
      category,
      type,
      date
    });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de l’ajout." });
  }
};

// ❌ Supprimer une transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction introuvable." });
    }

    res.json({ message: "Transaction supprimée." });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la suppression." });
  }
};
