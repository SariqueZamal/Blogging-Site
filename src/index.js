const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use( function(req, res, next){
  
  console.log("hellooo middle ware active")
  console.log()

  var d = new Date();
  var datetime = d.toLocaleString();console.log(datetime);
  console.log(req.originalUrl)

  console. log(req. socket. remoteAddress);
  next()
})



mongoose.connect("mongodb+srv://Murlidhar1999:O4n7QkIgSx4LYyAG@cluster0.vghet.mongodb.net/Project1", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
