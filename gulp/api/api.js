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
}];

exports.search = function(req, res) {
  res.json(searchResults);
};

/*exports.reconfigure = function(request, res) {
  var R = request.body;
  user = {
     loggedIn: true,
     title : R.title,
     firstName: R.firstName,
     lastName: R.lastName,
     email: R.email,
     institution: {
       name: R.institution,
       department: R.department,
       subscribed: R.subscribed || [],
       ipRestricted: R.ipRestricted || false
     },
     registered: R.registered || []
  };

  res.redirect('/index.html');
};*/