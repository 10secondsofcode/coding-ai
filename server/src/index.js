const express = require('express');
const bodyParse = require('body-parser');

// routers
const mentorRouter = require('./mentors/router.js');

const app = express();

app.use(bodyParse.json());
app.use(mentorRouter);
app.listen(3000, () => {
  console.log('server running');
});
