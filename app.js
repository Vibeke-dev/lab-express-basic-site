const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => 
response.sendFile(__dirname + '/views/home-page.html'));

app.get('/about', (request, response, next) => 
response.sendFile(__dirname + '/views/about-page.html'));

app.get('/works', (request, response, next) => 
response.sendFile(__dirname + '/views/works-page.html'));

app.get('/photo', (request, response, next) => 
response.sendFile(__dirname + '/views/photo-page.html'));
 
  // Server Started
//app.listen(3000, () => console.log('My first app listening on port 3000! '));
app.listen(3000);
