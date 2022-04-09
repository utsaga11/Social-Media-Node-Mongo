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

//8 session - cookies
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-statregy");

// session
const MongoStore = require("connect-mongo");

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// 5 statis files
app.use(express.static("./assets"));
// extract syles to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(expressLayouts);

//3 set view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// 9 setting middleware for session
app.use(
  session({
    name: "codeial",
    //todo change the secret before deployment in production
    secret: "something",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost/codeial_development2",
        autoRemove: "disabled",
      },
      (err) => {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// 2 use express router
app.use("/", require("./routes"));

//1
app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting to port", port);
  }
  console.log("All Set :)");
});
