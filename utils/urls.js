// Make a class to store the urls and their shortened versions, like this:

// {
//     originalUrl: '',
//     shortUrl: ''
// }

// Create new short url
// Look up existing url
// Get all existing urls

const randomstring = require('randomstring');

class Urls {
    constructor() {
        this.data = [];
    }

    addUrl(url) {
        let short = randomstring.generate(8);

        let newUrl = {
            originalUrl: url,
            shortUrl: `sho.rt/${short}`
        };

        this.data.push(newUrl);

        return newUrl.shortUrl;
    }

    lookupShortUrl(shortUrl) {
        return this.data.filter((url) => shortUrl === url.shortUrl);
    }

    lookupOriginalUrl(originalUrl) {
        return this.data.filter((url) => originalUrl === url.originalUrl);
    }
};

module.exports = {Urls};
