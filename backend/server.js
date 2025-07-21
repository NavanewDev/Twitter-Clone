import express from "express";
import authRouter from './routes/auth.routes.js';
import dotenv from 'dotenv';
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use("/api/auth", authRouter);

console.log(process.env.MONGO_URI);

app.listen(port, () => {
    console.log("Server is running on port: " + port);
    connectMongoDB();
})