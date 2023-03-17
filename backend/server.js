const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./db")

// routes
const userRoutes = require("./routes/userRoutes")

dotenv.config()
const app = express()
app.use(express.json())
connectDB();

app.get("/", (req, res) => {
    res.send("Hello")
})

app.use("/api/user", userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started at port ${process.env.PORT}`))