// 1
const express = require("express");
// 7 cookie
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
//4 ejs layouts
const expressLayouts = require("express-ejs-layouts");
// 6 database
const db = require("./config/mongoose");

app.use(express.urlencoded());

app.use(cookieParser());

// 5 statis files
app.use(express.static("./assets"));
// extract syles to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(expressLayouts);

// 2 use express router
app.use("/", require("./routes"));
//3 set view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//1
app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting to port", port);
  }
  console.log("All Set :)");
});
