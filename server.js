const express = require("express");
const app = express();
const port = process.env.PORT || 8965;
const fs = require("fs");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/keyboard.html"), () => {
        console.log("Success!!");
    });
});


app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});

