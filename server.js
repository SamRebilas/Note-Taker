const express = require("express");
const htmlRoutes = require("./Develop/routes/htmlRoute");
const app = express();
const apiRoutes = require("./Develop/routes/apiRoute")
const fs = require("fs")
const path = require("path")
app.use("/", htmlRoutes);
app.use("/api", apiRoutes)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.get('./Develop/routes/htmlRoute', (req, res) => {
  res.send('Hello!');
});
app.listen(3001, () => {
  console.log("API server live on port 3001");
});