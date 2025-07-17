const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Database Connected");
  } catch (error) {
    console.error("DB Connection failed", error);
    process.exit(1);
  }
}

module.exports = connectToDB;
