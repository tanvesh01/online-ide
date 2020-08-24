const express = require("express");
const bodyParser = require("body-parser");
var request = require("request");

const axios = require("axios");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        name: "Tanvesh",
    });
});
const code = `#include <iostream>
                using namespace std;
                int main() {
                    int x=10;
                    int y=25;
                    int z=x+y;
                    cout<<"Sum of x+y = " << z;
                }`;

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.jdoodle.com/v1/execute";

app.post("/", (req, res) => {
    console.log(req.body.lang);
    const program = {
        script: req.body.code,
        stdin: req.body.input,
        language: req.body.lang,
        versionIndex: "0",
        clientId: "fee2de3b42f120724094739513b6afd2",
        clientSecret: "883fdcb1100f3de46c32465c44df3cc06018942cdcbd707d6a6b826c08e5589a",
    };
    request(
        {
            url: url,
            method: "POST",
            json: program,
        },
        function (error, response, body) {
            res.json(body);
            console.log("error:", error);
            console.log("statusCode:", response && response.statusCode);
            console.log("body:", body);
        }
    );
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
