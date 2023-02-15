const express = require('express');
const app = express();

// console.log('hello world')

//if you navigate to localhost:3000/hello it will print "Hello world"
app.get('/hello', function(req, res){
    res.send('Hello world');
});

app.listen(3000, function(){
    console.log('Server is running on PORT 3000')
});