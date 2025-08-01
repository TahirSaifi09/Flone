import express from "express"
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectDB();
const PORT = process.env.PORT || 8000

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Flone api fetched successfully")
})

app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})