const express = require("express");
const { json } = require("express");
const connect = require('./config/todoDB') // this variable is imported in order to connect the mongodb

require("dotenv").config() // allows us to use the environment variables in .env
const bodyParser = require("body-parser");
const routes = require("./routes/todoRoutes");

const app = express();
 
connect()  //to initiate connection to db

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = process.env.PORT ;

app.listen(PORT, ()=> {
  console.log(`Server is listening on port ${PORT}`)
});

app.use('/', routes);