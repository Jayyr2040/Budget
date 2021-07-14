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
const Budget = require("./models/budget");

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false })); 

app.use(express.static('public'));

app.get("/budget", (req, res) => {
    res.render("index.ejs",{Budget});
  });

app.get("/budget/new", (req, res) => {
    res.render("new.ejs");
  });
  
app.get("/budget/:id", (req, res) => {
    const pos = req.params.id;
    res.render("show.ejs", { bud : Budget[pos] });
  });

app.post("/budget", (req, res) => {
    if (typeof req.body.tags === 'string'){req.body.tags = req.body.tags.split(',')}
    if (req.body.isNegative === 'on'){req.body.amount = `-${req.body.amount}`}
    req.body.tags.sort();
    Budget.push(req.body);
    res.redirect("/budget");
  });
  
app.listen(PORT, () => {
    console.log("Running on port: ", PORT);
  });
  