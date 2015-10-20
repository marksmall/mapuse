'use strict';

var tools = [{
  name: 'Print'
}, {
  name: 'Import'
}, {
  name: 'Export'
}, {
  name: 'Open Bookmark'
}, {
  name: 'Save Bookmark'
}, {
  name: 'Annotation Tools'
}, {
  name: 'Measurement Tools'
}, {
  name: 'Feature Info'
}, {
  name: 'Legends'
}];

exports.getTools = function(req, res) {
  res.json(tools);
};
