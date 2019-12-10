// var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/%7Bsessionkey%7D?pageIndex=0&pageSize=10");
// xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "770b384954msh2abf447cafe8eaep111516jsn225385055740");

// xhr.send(data);
































// // // imports the packages into the document, requiring their respective module.
// // const express = require('express');
// // const path = require('path'); 
// // const fetch = require('node-fetch');

// // // app runs the express module, allowing it to be used elsewhere in the document without the need to write the function more than once, defining it to a quick variable.
// // const app = express();
// // // this defines our port; this is where on the localhost that our content will be found.
// // const port = 8006;

// // // using this, we pass information to the pug file. because in that document we have defined the title and the message, we can use those to define those as the content which should go inside of the document. Here, we use render to have the information passed to the pug file rendered to the user as html. 

// // app.get('/github', (req, res) => {  
// // //because fetch has been defined above as node-fetch, we can just say fetch, instead of node-fetch.
// // fetch('https://api.github.com/users/cgregorio026')
// // .then(res => res.json())
// // .then(
// //   (json) => {
// //     console.log(json)
// //   res.render('github', { 
// //       data: info,
// //       github: json
// //     })
// //   })
// // });
  

// // // when running nodemon, this will tell us that the info will be displayed on the port defined. to run this using nodemon, we would want to be in the projects directory, and use nodemon express.js, which will display this message, and then display the rest of our information in the pug file.
// // const server = app.listen(port, () => {
// //     console.log(`something is here -> ${server.address().port}`);
// // });