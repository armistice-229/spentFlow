const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const transactionRoutes = require("./routes/transactionRoutes");
app.use("/api/transactions", transactionRoutes);
const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
