var express = require('express')
var app = express();

app.get('/', function (req, res) {
    var json;
    json = JSON.stringify({ipaddress: req.headers['x-forwarded-for'], language: req.headers['accept-language'].split(',')[0], software: req.headers['user-agent'].split('(')[1].split(')')[0]});

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(json);
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});