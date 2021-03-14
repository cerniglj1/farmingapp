const fetch = require('node-fetch');
let username = 'Jane Solo';
let baseurl = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=';

const constructUrl = (username) => baseurl + username.replace(/\s/g,"%20");

const farmingLevel = async () => {
	fetch(constructUrl(username))
		.then(res => res.text())
		.then(data => {
			let levels = data.split(',')
			console.log(levels[41])
		});
}

module.exports = {
	farmingLevel: farmingLevel()
}