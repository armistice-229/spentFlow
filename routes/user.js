const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const User = require("../models/User");

// 🧑‍💼 GET /api/user/profile
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("name email");
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
