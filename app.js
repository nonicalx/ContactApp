const express = require('express');
const contactController = require('./controllers/contactController.js');
const methodOverride = require('method-override');
const app = express();

//setting view engine 
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//method Override middleware
app.use(methodOverride('_method'));

//start controllers
contactController(app);

//Listen to port
app.listen(3020);
console.log(`Listening to port 3020 ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\nvisit localhost:3020`);