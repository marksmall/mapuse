'use strict';

var printResults = [{
  name: 'Edinburgh'
}];

exports.getResults = function(req, res) {
  res.json(printResults);
};
