var createError = require("http-errors");
var express = require("express");
// import express Flash
// const flash = require("express-flash");
// import express session
// const session = require("express-session");

var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
// var passport = require("passport");
// var LocalStrategy = require("passport-local");
// var crypto = require("crypto");
// var db = require("../config/configdb");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");
var app = express();

app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// import express session
// app.use(
//   session({
//     cookie: { maxAge: 60000 },
//     store: new session.MemoryStore(),
//     saveUninitialized: true,
//     resave: "true",
//     secret: "secret",
//   })
// );
// import express flash
// app.use(flash());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
