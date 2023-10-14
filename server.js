const express = require('express');
const app = express();
const mongodb = require('./db/connections');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app
    .use(bodyParser.json())
    .use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


mongodb.initDb((err) => {
    if(err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });