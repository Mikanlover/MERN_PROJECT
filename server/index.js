import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.disable("x-powered-by");

app.listen(PORT, () => {
    connectDB();
    console.log(`The server is actually listen on: localhost: ${PORT}`);
});