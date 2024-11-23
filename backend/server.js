import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
//import cartRoutes from "./routes/cart.route.js";
//import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
//import analyticsRoutes from "./routes/analytics.route.js";
import cors from "cors"

// Import MongoDB connection function
import connectDB from "./lib/db.js"; // Default import


const __dirname = path.resolve();

// Resolve the correct path to the .env file
const envPath = path.join(__dirname, ".env");

console.log("Loading .env from:", envPath); // Log to check if the correct .env path is used

// Load environment variables
dotenv.config({ path: envPath });

// Check if MONGO_URI is being loaded correctly
console.log("MONGO_URI from .env:", process.env.MONGO_URI); // Log MONGO_URI value for debugging

// Start the MongoDB connection (using the imported connectDB function)
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors("*"));
// Route handlers
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
//app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
//app.use("/api/analytics", analyticsRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

