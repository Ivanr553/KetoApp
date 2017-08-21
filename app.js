const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors")
const bodyParser = require("body-parser");

const routes = require("./routes/routes");

app.use(cors());;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

app.use(express.static(path.join(__dirname, "public")));

const port = 3001;

app.listen(port, () => {
  console.log("Server started on port:" + port);
});
