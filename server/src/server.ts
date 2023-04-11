import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(express.json());
connectDb();

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
