require("dotenv").config();
require("./config/mongo");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Router Home
const indexRouter = require("./routes/index.routes");
app.use("/", indexRouter);

// Router Users
const usersRouter = require("./routes/users.routes");
app.use("/users", usersRouter);

// Router Contract
const contractsRouter = require("./routes/contracts.routes");
app.use("/contracts", contractsRouter);

//Router Options
const optionsRouter = require("./routes/options.routes");
app.use("/options", optionsRouter);

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
