const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models/resistance");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(`mongodb://localhost:${PORT}/`, {useNewUrlParser: true});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});