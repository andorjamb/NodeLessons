'use stict';

const http = require('http');
import * as path from 'path';
const { sendFile } = require('./library/utilities');
const { search } = require('./storage/personsDataLayer');


const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const homePath = path.join(_dirname, 'home.html');

const server = http.createServer((req, res) => {
    const {
        pathname,
        searchParams
    } = new URL(`http://${req.headers.host}${req.url}`);

    const route = decodeURIComponent(pathname);

<<<<<<< HEAD
    if (route === ('/')) {

=======
    if(route===('/')){
sendFile(res, homePath);
>>>>>>> 69ca4d5ebc96113e75faf4d19453eaf37b07c511
    }
    else if (route.startsWith('/styles')) {
        sendFile(res, path.join(_dirname, route), 'text/css')
    }
    else if (route.startsWith('/js/')) {
        sendFile(res, path.join(_dirname), route, 'text/javascript');

    }
    else {
        let result = [];
        if (route === '/persons') {
            result = search();
        }
        else if (route = '/persons/firstname') {
            result = search('firstname', searchParams.get('value'))
        }
        else if (route === '/persons/age') {
            result = search('age', searchParams.get('value'))
        }
        else {
            result = { message: 'key not found ' }
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }
})

server.listen(port, host, () => console.log('server is listening on port ${port}'));