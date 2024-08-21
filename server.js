// npm i dotenv
require('dotenv').config();
const port = process.env.PORT;

const express = require("express");
const morgan = require("morgan");
const app = express();
const userRoutes = require("./routes/user.routes");
const mongoose = require("mongoose")

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(" Welcome To Express Server ");
});
app.use("/api/users", userRoutes);

app.listen(port, () => {
  //Database Connection
  mongoose
  .connect(process.env.MONGO_URL)
  .then(()=>console.log("Database connection established success..."))
  .catch((err)=>console.log(err))
  console.log(`Server Start at http://localhost:${port}`);
});