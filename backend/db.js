const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'converso',
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MOngoDB connected to: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDB };