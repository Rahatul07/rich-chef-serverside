const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require("./data/chef.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("rich-chef is running");
});
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefs.find((c) => c.id === id);
  res.send(selectedChef);
});
app.listen(port, () => {
  console.log(`rich-chef API is running on port: ${port}`);
});
