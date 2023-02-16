const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello people!')
})

app.get('/movies', (req, res) => {
    res.send('Movies');
})

app.get('/movies/action', (req, res) => {
    res.send('Fast and Farious 8');
})

app.listen(PORT, () => {
    console.log('Server is running!')
});