import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

import { connectDB } from "./config/db.js";


const app = express();
const PORT = process.env.PORT;

app.disable("x-powered-by");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.listen(PORT, () => {
    connectDB();
    console.log(`The server is actually listen on: localhost: ${PORT}`);
});