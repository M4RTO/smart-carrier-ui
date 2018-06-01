const config = require('./api/config/config').get(process.env.REACT_APP_ENV);
const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const bodyParser = require('body-parser');
const cors = require ('cors');


const apiForwardingUrl = config.host;

const proxyOptions = {
    changeOrigin: true
};

httpProxy.prototype.onError = function (err) {
    console.log(err);
};

const apiProxy = httpProxy.createProxyServer(proxyOptions);

console.log('Forwarding API requests to ' + apiForwardingUrl);


const DEFAULT_PORT = 3001;
const DIST_DIR = path.join(__dirname,'dist');

const app = express();

app.use(cors());

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: 'application/*+json'}));

console.log(`path-dist: ${DIST_DIR}`);
app.use('/dist',express.static(DIST_DIR));

app.all(config.nodeApiRoot, function(req, res) {
    console.log(res);
    apiProxy.web(req, res, {target: apiForwardingUrl});
});


app.listen(DEFAULT_PORT, function(error){
	console.log(`PROXY ESCUCHANDO EN PUERTO ${DEFAULT_PORT}`);
	if(error){
		console.log(error);
	}
});


