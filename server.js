const express = require('express');
const path = require('path')
const port = process.env.PORT || 3330
const app = express();


// serve static assets normally
app.use(express.static(__dirname + '/public'))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var server = app.listen(port);
console.log('Server is running on htpp://localhost:' + port)
