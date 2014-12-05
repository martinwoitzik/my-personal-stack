var express = require('express');
var router = express.Router();
var blpapi = require('blpapi');
var session = new blpapi.Session({
    host: '127.0.0.1',
    port: 8194
});

session.on('SessionStarted', function(m) {
    console.log('Bloomberg-API Session started');
});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('bloom', { title: 'Express' });
});

module.exports = router;