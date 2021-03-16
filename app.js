const { seedlist, patchlist } = require('./modules/generate');
const { Player } = require('./modules/player');


/*const patches = player => {
	let lilpatchlist = []
	for (let num in patchlist) {
		let patchlevel = patchlist[num].maxseed(player).level
		console.log(patchlevel)
		console.log(player.level)
		if (patchlevel <= player.level) {
			console.log(`in if statement. current num ${num}`)
			lilpatchlist.push(patchlist[num])
		}	else { console.log('else fired') }
	}
}*/

function stackUp(items) {
	let inv = []
	let returninv = {}

	for (let num in items) {
		inv.push(items[num].split(' x '))
	}

	for (let num in inv) {
		if (returninv[inv[num][0]] === undefined) {
			returninv[inv[num][0]] = parseInt(inv[num][1])
		} else if (returninv[inv[num][0]] === returninv[inv[num][0]]) {
			returninv[inv[num][0]] = returninv[inv[num][0]] + parseInt(inv[num][1])
		}
	}
	console.log(returninv);
}

const getInventory = (patches, player) => {

	let bestseeds = []
	let inventory = []

	for (let num in patches) {
		theseed = patches[num].maxseed(player)
		//console.log(`about to compare ${theseed.level} <= ${player.level}`)
			if (theseed.level === 0 || theseed.level > player.level) {
				console.log(`skipping ${theseed.name}`)
			} else {
				bestseeds.push(theseed)
				console.log(`appending ${theseed.name} to bestseeds list.`)
			}
	}
	for (let seed in bestseeds) {
		//3 seeds per allotments
		inventory.push(bestseeds[seed].name + ' seeds x 3')
	}
	stackUp(inventory)
}
//Create the player #leet boy
const player = new Player('jane solo', ['q1d','12d'])

console.log(player)