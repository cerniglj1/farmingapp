let username = 'Jane Solo'
let baseurl = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player='

//This takes the baseurl and the username, and returns the combination 
//of the 2, replacing any spaces in the username with %20
function constructUrl(username) {
	return fixedname = baseurl + username.replace(/ /g,"%20");
}

//this is the actual call, don't completely understand why this works yet.
function loginUser(username, callback){
	let http = require('https');
	let url = constructUrl(username)

	//this is pulling it.
	let pullrequest = function(response) {
		let str = '';
		response.on('data', function(chunk) {
			str += chunk;
		});
		response.on('end', function() {
			callback(str);
		}); 
	}
	let response = http.request(url, pullrequest).end()
}
//This part is the actual call to the functions, with a callback function to display the result,
//split by commas, at location 41
const display = loginUser(username, (display) => {
	let info = display.split(',')
	console.log(username + "'s Farming Level is " + info[41]);
});