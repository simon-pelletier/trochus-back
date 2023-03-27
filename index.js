require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const router = require('./app/router.js')

app.use(router);

app.listen(port, () => {
  console.log(`✨ Trochus backend is listening on port ${port}`)
});
