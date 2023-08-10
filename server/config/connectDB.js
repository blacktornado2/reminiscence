const mongoose = require("mongoose");

async function connectDB(DB_URL) {
    try {
        await mongoose.connect(DB_URL);
        console.log(`Connection with database successful!`);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;
