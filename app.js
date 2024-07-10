const express = require('express');
const app = express();
const socket = require("socket.io");
const http = require("http");
const path = require("path");
const{Chess} = require("chess.js");



app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.listen(3000);