'use strict';

var express = require('express');
var search = require('./search');
var tools = require('./tools');
var print = require('./print');

exports.api = function() {
    var app = express();

    app.get('/api/search', search.getResults);
    app.get('/api/tools', tools.getTools);
    app.get('/api/print', print.getResults);

    app.listen(8000);
};
