const express = require("express");
const htmlRoutes = require("./Develop/routes/htmlRoute");
const PORT = process.env.PORT || 3001;
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
app.listen(PORT, () => {
  console.log("API server live on port ${PORT}!");
});