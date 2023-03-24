"use strict";

const express = require("express");
const axios = require("axios");
const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  axios
    .get("https://api.github.com/search/repositories?q=sort=stars&order=asc")
    .then((res) => {
      let repos = res.data.items;
      let top10Repos = repos.slice(0, 10);

      top10Repos.forEach((repo) => {
        console.log(repo.name, repo.stargazers_count);
      });
      res.send(
        top10Repos.map((repo) => {
          return `<p>Repo name:${repo.name}  Stars:${repo.stargazers_count}</p>`;
        })
      );
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
