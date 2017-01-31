var express = require("express"),
    app = express();

app.use(express.static('.'));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(8000, function() {
  console.log("Listening on http://localhost:8000");
});
