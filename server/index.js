const express = require("express");
const app = express();
const Port = process.env.PORT || 8080;
const importJob = require("./Service/jobImport");
const cron = require("node-cron");

// Server
app.listen(Port, () => {
  console.log(`Application running at Port:${Port}`);
});

// Database
const DB = require("./config/db");
(async () => {
  await DB();
  await importJob();

  cron.schedule("0 * * * *", importJob);
})();
