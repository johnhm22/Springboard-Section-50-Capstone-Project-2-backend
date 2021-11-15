const express = require("express");
// const cors = require("cors");
const { NotFoundError } = require("./expressError");


const app = express();
const issueRoutes = require('./routes/issues');
const userRoutes = require('./routes/users');


// app.use(cors());
app.use(express.json());
  
app.use("/issues", issueRoutes);
app.use("/users", userRoutes);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://managemyestate.herokuapp.com/");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
    return next(new NotFoundError());
  });

module.exports = app;
