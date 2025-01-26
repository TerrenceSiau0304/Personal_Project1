import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri) 
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
