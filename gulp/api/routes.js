'use strict';

var express = require('express');
var data = require('./data');

exports.api = function() {
    var app = express();
    app.get('/api/search', data.search);
    app.listen(8000);
};
