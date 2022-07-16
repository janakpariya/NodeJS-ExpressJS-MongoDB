const express = require('express');

const app = express();

app.get("", (req, resp) => {
    console.log(resp)
    resp.send("hello world");
})

app.get("/about", (req, resp) => {
    resp.send("about");
})

app.get("/help", (req, resp) => {
    resp.send("help page");
})

app.listen(5000);