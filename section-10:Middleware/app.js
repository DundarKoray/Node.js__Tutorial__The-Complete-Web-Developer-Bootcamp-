const express = require('express');
const app = express();

app.use(logging)

function logging(req, res, next) {
    console.log('Logging Code 1');
    console.log('Logging Code 2');
    console.log('Logging Code 3');

    next();
}

app.get('/', (req, res) => {
    res.send('ROOT');
    console.log('logged');
});

// app.get('/login', logging, (req,res) =>{
//     res.send('LOGGED')
// })

app.get('/login', (req,res) =>{
    res.send('LOGGED')
})

app.listen(3000, () => {
    console.log('Server is running...')
});