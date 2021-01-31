const express = require('express');
const app = express();


app.get('/', function(req, res) {
  res.send('Typical get response');
})

app.listen(80, function() {
  console.log('Now app listening on 80')
});


