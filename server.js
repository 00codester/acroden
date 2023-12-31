const express = require('express');
const cors = require('cors');
const mongodb = require('./db/connections');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app
    .use(cors())
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })


mongodb.initDb((err) => {
    if(err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });