var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3025;

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
