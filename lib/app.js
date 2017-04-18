const fs = require('fs');
const path = require('path');
const parseUrl = require('url').parse;

function hello(req, res) {
    const name = req.nameQueryPath || 'Stranger';
    const salutation = req.query.salutation || 'Hello';
    let greeting = `<h1>${salutation}, ${name}!</h1>`;
    console.log('greeting', greeting);
    res.end(greeting);
}

function getIndex(req, res) {
    const filePath = path.join(__dirname, 'index.html'); //This the same as the path.dirname() of the __filename
    fs.readFile(filePath, (err, data) => {
        // TODO: deal with err...
        res.end(data);
    });
}

const routes = {
    '/': getIndex,
    '/index.html': getIndex,
    '/greeting': hello,
    // '/fact': fact
};

function notFound(req, res) {
    res.statusCode = 404;
    res.statusMessage = `Cannot ${req.method}${req.url}`; //TODO: find proper syntax
    res.end();
}

function app(req, res) {
    console.log(req.method, req.url);
    const url = parseUrl(req.url, true);
    console.log('parsedURL', url); //makes the url string an object
    req.query = url.query;

    res.setHeader('Content-Type', 'text/html');

    const urlPathname = url.pathname.slice(1).split('/');
    const routeHit = routes[`/${urlPathname[0]}`] || notFound;
    req.nameQueryPath = urlPathname[1];

    routeHit(req, res);
}


module.exports = app;