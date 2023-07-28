require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use('/public', express.static('public'));
app.use('/images', express.static('public/images'));

const router = require('./app/router.js');

app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
  console.log(`✨ Trochus backend is listening on port ${port}`)
});
