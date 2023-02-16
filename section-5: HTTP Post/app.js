const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/movies', (req, res) => {
    res.send('Movies');
})

app.post('/movies', (req,res) => {
    let title = req.body.title
    let year = req.body.year
    console.log(title)
    console.log(year)
    res.send('ok')
})

app.listen(PORT, () => {
    console.log('Server is running!')
});