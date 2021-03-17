const fetch = require('node-fetch');
let baseurl = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=';

const constructUrl = (username) => {
	return baseurl + username.replace(/\s/g, '%20');
}

const farmingLevel = async (username) => {

	const fetcheddata = await fetch(constructUrl(username))

	let fetchedtext = await fetcheddata.text();
	let levels = fetchedtext.split(',');
	let farminglevel = levels[41];

	return await farminglevel;

}

module.exports = {
	farmingLevel: farmingLevel
};