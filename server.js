// express setup
const express = require('express');

// app setup
const app = express();
const mediaList = require('./mediaList')

console.log(mediaList)

// set the template with exoress
app.set('view engine', 'ejs');

// requests
app.get('/api', (req, res) => {
    res.render('index');
});

app.get('/api/media_list', (req, res) => {
    res.render('media_list');
})

app.get('/api/media/:Title', (req, res) => {
    let foundMedia = mediaList.find((media) => media.Title == req.params.slug);
    res.render('media_info', { displayMedia: foundMedia });
});


// server 
app.listen(8080, () => {
    console.log('App is now listening on port 8080 . . .')
});
