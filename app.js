const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({origin: "https://managemyproperty.surge.sh", credentials: true}));
app.use(express.json());

const issueRoutes = require('./routes/issues');
const userRoutes = require('./routes/users');




  

app.use("/issues", issueRoutes);
app.use("/users", userRoutes);



module.exports = app;
