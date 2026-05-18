require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const ConnectDB = require("./app/config/db");


const app = express();
ConnectDB();
//ejs
app.set("view engine", "ejs");
app.set("views", "views");


app.use(express.static("public"));

//middleware
app.use(express.json());




const productRoute = require("./app/routes/api/productRoute");
app.use("/api", productRoute);

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server is running on port ", `http://localhost:${PORT}`);
  }
});
