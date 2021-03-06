const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/codeial_development2");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connenting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
