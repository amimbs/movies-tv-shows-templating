// express setup
const express = require('express');

// app setup
const app = express();
const mediaList = require('./mediaList')

// set the template with exoress
app.set('view engine', 'ejs');

// requests
app.get('/api', (req, res) => {
    res.render('index');
});

app.get('/api/watch_list', (req, res) => {
    res.render('watch_list');
});

// render titles by type "movie"
app.get('/api/movies', (req, res) => {
    let movie = mediaList.filter((titles) => titles.Type =='movie');
    // console.log(movie);
    res.render('movies', { titles: movie });
});

// render titles by type "series"
app.get('/api/series', (req, res) => {
    let show = mediaList.filter((titles) => titles.Type =='series');
    console.log(show);
    res.render('series', { titles: show });
});

// This one selects all media by their titles
// app.get('/api/media_list', (req, res) => {
//     // route level key value pair
//     res.render('media_list', { media_list: mediaList });
// });


// server 
app.listen(8080, () => {
    console.log('App is now listening on port 8080 . . .')
});
