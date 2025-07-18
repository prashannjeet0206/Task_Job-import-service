const express = require("express");
const app = express();
const Port = process.env.PORT || 8080;
const importJob = require("./Service/jobImport");
const cron = require("node-cron");

// Server
app.listen(Port, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});

// testing
app.get("/", (req, res) => {
  res.json({ message: "Testing docker" });
});

// Database
const DB = require("./config/db");
(async () => {
  await DB();
  await importJob();

  cron.schedule("0 * * * *", importJob);
})();
