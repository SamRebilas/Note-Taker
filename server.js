const express = require("express");
const htmlRoutes = require("./Develop/routes/htmlRoute");
const app = express();
app.use("/", htmlRoutes);
app.get('./Develop/routes/htmlRoute', (req, res) => {
  res.send('Hello!');
});
app.listen(3001, () => {
  console.log("API server live on port 3001");
});