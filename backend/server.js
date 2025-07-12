import express from "express";

const app = express()
const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server running on port: ${PORT}`)
})