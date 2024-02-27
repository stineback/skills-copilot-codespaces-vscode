// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Set up body-parser to parse JSON in POST requests
app.use(bodyParser.json());

// Create an array to hold comments
var comments = [];

// Handle GET requests to /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Handle POST requests to /comments
app.post('/comments', function(req, res) {
  // Get the comment from the POST request
  var comment = req.body;
  // Add the comment to the array
  comments.push(comment);
  // Respond with the updated array
  res.json(comments);
});

// Start the server
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
```

Run the server with `node comments.js` and test it with the following code:

```javascript
// Path: test.js
var request = require('request');

// Make a GET request to the server
request('http://localhost:3000/comments', function(error, response, body) {
  console.log(body);
});

// Make a POST request to the server
request.post('http://localhost:3000/comments', {json: {author: 'Mike', text: 'Hello'}}, function(error, response, body) {
  console.log(body);
});
```

Run the test with `node test.js` and you should see the following output:

```
[]