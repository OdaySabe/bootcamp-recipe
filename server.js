const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const port = 8080;
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/sanity", function (req, res) {
  res.send("OK");
});

app.get("/recipes/:ingredient", function (req, res) {
  axios
    .get(
      `https://recipes-goodness.herokuapp.com/recipes/${req.params.ingredient}`
    )
    .then(function (resa) {
      let ArryOfrecipes = [];
      for (recipe of resa.data.results) {
        ArryOfrecipes.push({
          ingredients: recipe.ingredients,
          title: recipe.title,
          thumbnail: recipe.thumbnail,
          href: recipe.href,
        });
      }
      res.send(ArryOfrecipes);
    });
});

app.listen(port, function () {
  console.log("server start listining on port " + port);
});
