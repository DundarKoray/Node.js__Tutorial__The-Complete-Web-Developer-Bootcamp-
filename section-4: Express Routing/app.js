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
    res.send('Action Movies');
})

app.get('/movies/Comedy', (req, res) => {
    res.send('Comedy Movies');
})

//dynamic route
app.get('/movies/:genre/year/:year', (req, res) => {
    // res.send('Movies');

    //sending JSON
    let movies = [
        { title: 'Lego Movie', year: 2015 },
        { title: 'Titanic', year: 1998 },
        { title: 'Batman', year: 20014 },
        { title: 'Lord of the Rings', year: 2011 }
    ]
    res.json(movies)

    //if one visits /movies/action/year/2009?sort=asc&page=16

    console.log(req.params.genre); //action
    console.log(req.params.year); //2009

    console.log(req.query.sort); //asc
    console.log(req.query.page); //16
})

app.listen(PORT, () => {
    console.log('Server is running!')
});