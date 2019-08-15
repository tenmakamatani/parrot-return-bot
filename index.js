"use strict";

const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.send("ようこそオウム返しBOTヘ");
});

app.post("/hook", (req, res) => {
    res.json({
        test: "deploy test"
    });
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});