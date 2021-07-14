/*
mkdir, cd into the dir
touch server.js .env .gitignore
mkdir views models
touch views/index.ejs views/show.ejs models/dummy.js
npm init -y
npm i express dotenv ejs
npm install -D nodemon
code .
in .gitignore .env and node_modules/ 
in .env PORT=3000
in server.js
*/

require("dotenv").config();
const express = require("express");
const budget = require("./budget");

const app = express();
const PORT = process.env.PORT;

app.get("/budget", (req, res) => {
    res.send(budget);
  });

app.listen(PORT, () => {
    console.log("Running on port: ", PORT);
  });
  