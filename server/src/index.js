const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { mongodb } = require('config');

//start database connection
const mongodbUrl = `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.dbname}`;
const mongoConnection = mongoose.createConnection(mongodbUrl, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
mongoConnection.on('error', (err) => {
    console.log(`Mongodb connection error : ${err.message}`);
})

// routers
const mentorRouter = require('./mentors/router.js');

const app = express();

app.use(bodyParser.json());
app.use('/mentors', mentorRouter);
app.listen(3000, () => {
  console.log('server running');
});
