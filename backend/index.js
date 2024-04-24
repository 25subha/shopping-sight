const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.routes");
const userRouter = require("./routes/user.Router");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
})
);

const mongodbURL = "mongodb+srv://subhankar:maji@cluster0.c3rsrjr.mongodb.net/e_commerce?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodbURL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongodb connection error"));

db.once("open", () => {
  console.log("connected to database successfully!");
})

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  app.use(express.json());
  app.use(productRouter);
  app.use(userRouter);
  
  app.listen(4000, '0.0.0.0',() => {
    console.log("server started at port 4000")
  })