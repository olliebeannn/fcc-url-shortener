const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {Urls} = require('./utils/urls');

const port = process.env.PORT || 3000;

let app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

let urls = new Urls();

// Test code

// let shortUrl = urls.addUrl('https://google.com').shortUrl;
//
// console.log('shortUrl:', shortUrl);
//
// console.log('all urls:', urls);
//
// console.log('find by original url', urls.lookupOriginalUrl('https://google.com'));
//
// console.log('find by short url', urls.lookupShortUrl(shortUrl));

// Test code end

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/shorturl/new', (req, res) => {
    // console.log(req.body);

    let url = req.body.url;

    // Look for https:// at beginning and strip it off
    const httpsRegex = /^https?:\/\//;

    if (httpsRegex.test(url)) {
        url = url.replace(httpsRegex, '');
    }

    // Check if URL is valid or not, return error if not
    

    let newUrlObj = urls.addUrl(url);

    console.log(urls);

    res.send(newUrlObj);

    // res.send(req.body);
});

app.get('/api/shorturl/:shorturl', (req, res) => {
    let url = urls.lookupShortUrl(req.params.shorturl);

    res.redirect('https://' + url.originalUrl);

    // res.send(url);
});

app.listen(port, () => {
    console.log(`App up on port ${port}`);
});
