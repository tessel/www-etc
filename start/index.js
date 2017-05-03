var express = require('express')

var app = express();

app.use(function (req, res) {
  res.redirect('http://tessel.io/start')
});

var port = process.env.PORT;
app.listen(port, function () {
  console.log('Example app listening on port', port);
});
