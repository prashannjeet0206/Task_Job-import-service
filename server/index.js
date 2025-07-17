const express = require("express");
const app = express();
const Port = process.env.PORT || 8080;

// Server
app.listen(Port, () => {
  console.log(`Application running at Port:${Port}`);
});

// Database
const DB = require("./config/db");
DB();
