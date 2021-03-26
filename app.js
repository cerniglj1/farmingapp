const { seedlist, patchlist, locationlist } = require('./modules/generate');
const { Player } = require('./modules/player');

// This function takes an array of items and stacks them if they're similar.
// *** Need to add stackability check
const stackUp = (items) => {
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
	return returninv;
}

const getInventory = (patches, player) => {

	let bestseeds = [];
	let inventory = [];
	let playerlevel = player.getLevel();

	for (let num in patches) {
		theseed = patches[num].maxseed(player)
		//console.log(`about to compare ${theseed.level} <= ${player.level}`)
			if (theseed.level === 0 || theseed.level > playerlevel) {
				//console.log(`skipping ${theseed.name}`)
			} else {
				bestseeds.push(theseed)
				//console.log(`appending ${theseed.name} to bestseeds list.`)
			}
	}
	for (let seed in bestseeds) {
		//3 seeds per allotments
		inventory.push(bestseeds[seed].name + ' seeds x 3')
	}
	return stackUp(inventory)
}


async function main(playername) {
	const player = new Player(playername, ['q1d', '12d']);
	await player.init();

	const inventory = await getInventory(patchlist, player);
	return inventory
}

module.exports = {
	main: main
}