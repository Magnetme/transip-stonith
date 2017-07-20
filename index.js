var TransIP = require('transip-node');
var fs = require('fs');

var userName = process.env.TRANSIP_USER;
if (!userName || userName === '') {
	console.error('Environment variable TRANSIP_USER was not set or empty.');
	process.exit(1);
}
var privateKey = fs.readFileSync('/opt/privateKey');
if (privateKey === '') {
	console.error('Private key file was empty (should be mapped to /opt/privateKey).');
	process.exit(1);
}

var vps = process.env.DOOMED_VPS;
if (!vps || vps === '') {
	console.error('Environment variable DOOMED_VPS was not set or empty.');
	process.exit(1);
}

var transipInstance = new TransIP(userName, privateKey);

// Lets first fetch the Haip
transipInstance.vpsService.stopVps(vps).then(function (vpsResult) {
	console.log('VPS ' + vps + ' was killed the hard way.');
});
