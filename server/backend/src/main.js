const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const { response } = require("express");
const fs = require("fs");
const mysql = require("./mysql");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// start
app.use(cors()); // use this after the variable declaration

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// post login
app.post("/login", urlencodedParser, (req, res) => {
    mysql
        .login(req.body.email, req.body.password)
        .then((res1) => {
            console.log(res1);
            res.status(200).json({
                ifCorrect: true,
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

// all the codes should before this method

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
