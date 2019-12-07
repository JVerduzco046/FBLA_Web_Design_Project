// imports the packages into the document, requiring their respective module.
const express = require('express');
const path = require('path'); 
const fetch = require('node-fetch');

// app runs the express module, allowing it to be used elsewhere in the document without the need to write the function more than once, defining it to a quick variable.
const app = express();
// this defines our port; this is where on the localhost that our content will be found.
const port = 42069;

// info is some basic data that we can use to be called in the pug files. we can pass it through an app.get...res.render to render it in the specific files that we want to call our data through.

// this reads the routes file for the api file.
module.exports = (app) => {
  fs.readdirSync('routes/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  })
}

// here, this causes everything under the public directory to be displayed as static content. This meaning; we will be able to run the code as content that will never change, and we won't get a 404 error if it asks for dynamic content and we aren't passing any through it.
app.use("/static", express.static(path.join(__dirname, "public")));

// using this, we pass information to the pug file. because in that document we have defined the title and the message, we can use those to define those as the content which should go inside of the document. Here, we use render to have the information passed to the pug file rendered to the user as html. 
app.get('/offers', (req, res) => {  
//because fetch has been defined above as node-fetch, we can just say fetch, instead of node-fetch.
fetch('https://rapidapi.com/squawk7000/api/aerodatabox')
.then(res => res.json())
.then(
  (json) => {
    console.log(json)
  res.render('github', { 
      data: info,
      github: json
    })
  })
});

// when running nodemon, this will tell us that the info will be displayed on the port defined. to run this using nodemon, we would want to be in the projects directory, and use nodemon express.js, which will display this message, and then display the rest of our information in the pug file.

const server = app.listen(port, () => {
    console.log(`something is here -> ${server.address().port}`);
});