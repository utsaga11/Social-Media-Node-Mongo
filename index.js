// 1
const express = require("express");
const app = express();
const port = 8000;

//1
app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting to port", port);
  }
  console.log("All Set :)");
});
