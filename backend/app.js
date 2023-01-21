const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./routes/userRoutes");
const adminRouter = require("./routes/adminRoutes");

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Oringin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PATCH,DELETE,OPTIONS"
    );
    next();
  });

app.use('/api/user',userRouter);
app.use('/api/admin',adminRouter);

module.exports = app;
