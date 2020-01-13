// imports all of the necessary packages
var express = require("express");
const path = require("path");
const axios = require("axios");

// defines express as app; much shorter than writing express() for every line of code
var app = express();

// // uses axios to fetch some data from an api.
// axios({
//   method: "GET",
//   url:
//     "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2019-09-01",
//   headers: {
//     "content-type": "application/octet-stream",
//     "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
//     "x-rapidapi-key": "770b384954msh2abf447cafe8eaep111516jsn225385055740"
//   },
//   params: {
//     inboundpartialdate: "2019-12-01"
//   }
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// defines our view engine, and where the files that have those view engines are located.
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"));

// defines where all of our static content is located
app.use('/public', express.static('public'));
app.use('/img', express.static('public/img'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/html', express.static('public/html'));

app.get("/", (request, response) => {
  response.render('index');
});

app.get("/about", (request, response) => {
  response.render('about');
});

app.get("/offers", (request, response) => {
  response.render('offers');
});

app.get("/news", (request, response) => {
  response.render('news');
});

app.get("/offers2", (request, response) => {
  response.render('offers2',
    {
    // data: airline;
    });
});

// starts the server and log the port that our server is located at
// defines our port
var PORT = 3000;
// has express listen for where our server is (defined above)
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server started on ${PORT}`);
});