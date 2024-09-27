const express = require("express");
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const City = require('./repository/city-repositiry')


const setupAndStartServer = async () => {
  // create express object

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT , () => {
    console.log(`server started at ${PORT}`)

    // const city = new City()

    // city.createCity({name :'Kanpur'})
  })

}


setupAndStartServer() 