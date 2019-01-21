const express = require('express');
const cors = require('cors');

const {Urls} = require('./utils/urls');

const port = process.env.PORT || 3000;

let app = express();

let urls = new Urls();

// Test code

let shortUrl = urls.addUrl('https://google.com');

console.log('shortUrl:', shortUrl);

console.log('all urls:', urls);

console.log('find by original url', urls.lookupOriginalUrl('https://google.com'));

console.log('find by short url', urls.lookupShortUrl(shortUrl));

// Test code end

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
    console.log(`App up on port ${port}`);
});
