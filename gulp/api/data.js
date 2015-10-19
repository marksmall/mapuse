'use strict';

var searchResults = [{
  name: 'Edinburgh',
  zoomLevel: 16,
  point: {
    x: 55.953252,
    y: -3.188267
  }
}, {
  name: 'London',
  zoomLevel: 16,
  point: {
    x: 51.5073509,
    y: -0.1277583
  }
}, {
  name: 'Caisteal Dhùn Èideann',
  zoomLevel: 18,
  point: {
    x: 55.953252,
    y: -3.188267
  }
}];

exports.search = function(req, res) {
  res.json(searchResults);
};
