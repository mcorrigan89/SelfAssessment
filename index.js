var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = 8080;

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


app.use('/api', function(req, res) {
    res.json({
        colors: [
            "blue",
            "red",
            "green",
            "yellow"
        ],
        numbers: [
            "1",
            "2",
            "3",
            "4"
        ],
        directions: [
            "north",
            "south",
            "east",
            "west"
        ]
    })
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.listen(port);
console.log('Please go to port ' + port);