'use strict';

var searchResults = [{
  name: 'Edinburgh',
  zoomLevel: 4,
  point: {
    x: 0,
	y: 0
  }
}, {
  name: 'London',
  zoomLevel: 4,
  point: {
    x: 0,
	y: 0
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