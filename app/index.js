const app = require('../app');
const pool = require('../bd');
app.get('/', function (req, res) {
    res.render('index');
  });

module.exports = app;