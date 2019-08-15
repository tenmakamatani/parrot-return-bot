"use strict";

const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;

const line = require("@line/bot-sdk");
const config = {
    channelAccessToken: process.env.ACCESS_TOKEN,
    channelSecret: process.env.SECRET_KEY
};

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.send("ようこそオウム返しBOTヘ");
});

app.post("/hook", line.middleware(config), (req, res) => {
    res.status(200).end();
    console.log("passed");
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});