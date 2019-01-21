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
        let foundUrl = this.lookupOriginalUrl(url);

        if (foundUrl) {
            return foundUrl;
        } else {
            let short = randomstring.generate(8);

            let newUrl = {
                originalUrl: url,
                shortUrl: short
            };

            this.data.push(newUrl);

            return newUrl;
        }
    }

    lookupShortUrl(shortUrl) {
        return this.data.filter((url) => shortUrl === url.shortUrl)[0];
    }

    lookupOriginalUrl(originalUrl) {
        return this.data.filter((url) => originalUrl === url.originalUrl)[0];
    }
};

module.exports = {Urls};
