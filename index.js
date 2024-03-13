const express = require('express')
const app = express();
const port = 3000

app.get('/route', function(req, res){
  console.log("hello");
  res.send('Hello World!');
  res.json({
    name:"vgk",
    age : 24
  })
});

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`);
})