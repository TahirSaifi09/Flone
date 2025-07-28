import express from "express"

const app = express();
// const port = 8000;

const PORT = process.env.PORT || 8000

app.get("/",(req, res)=>{
    res.send("Flone api fetched successfully")
})

app.listen(PORT,()=>{
    console.log(`api connected port http://localhost:${PORT}`)
})