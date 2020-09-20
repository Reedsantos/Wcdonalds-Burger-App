// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3025;

// Serve content
app.use(express.static("public"));

// parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
