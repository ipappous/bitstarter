var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var filebuf = fs.readFileSyn("./index.html");    
    var mesg =  filebuf.toString();
    response.send(mesg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
