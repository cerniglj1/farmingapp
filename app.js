const { seedlist, patchlist, locationlist } = require('./modules/generate');
const { Player } = require('./modules/player');

// This function takes an array of items and stacks them if they're similar.
// *** Need to add stackability check
const stackUp = (items) => {
	let inv = []
	let returninv = []
	let counter = 0
	// create a better array to work with.
	for (let num in items) {
		inv.push(items[num].split(' x '))
	}
	//sort by name
	inv.sort((a, b) => {
		let comparison = 0

		if (a > b) { comparison = 1; }
		else if (a < b) { comparison = -1; }
		return comparison;
	})


	//name is 		inv[num][0]
	//number is 	parseInt(inv[num][1])
	for (let num in inv) {
		// Create the Item to Push
		let itemtopush = { 'name': inv[num][0], 'amount': parseInt(inv[num][1]) };
		// Check if returninv array is empty, if so push item.
		console.log(`comparing ${inv[num]} to ${inv[num - 1]}`)
		if (returninv.length === 0 || itemtopush.amount === 0) {
			returninv.push(itemtopush)
		} else if (inv[num][0] === inv[num - 1][0]) {
			returninv[counter].amount = returninv[counter].amount + itemtopush.amount;
		} else if (inv[num][0] !== inv[num - 1][0]) {
			returninv.push(itemtopush);
			counter++;
		}
	}
	console.log(returninv)
	return returninv;
}

// This function takes an array of items and creates simple array of seeds and amounts needed
const getSeedArray = (seedArray) => {
	//inventory to return
	let returnInventory = [];

	//what seeds are we adding
	let seedsToAdd = {};

	//for each seed that was assigned to each patch (allotment, herb, flower)
	for (let index in seedArray) {

		// set seed = Seed in array
		let seed = seedArray[index];

		// get seed amount for type of seed (this can be shortened probably)
		let seedAmount = seed.getSeedAmount();

		// If seed in the object keys
		if (seedsToAdd[seed.name]) {
			// If update amount to include
			seedsToAdd[seed.name].amount = seedsToAdd[seed.name].amount + seedAmount;

			// If not in object keys, create key to update later
		} else {
			seedsToAdd[seed.name] = { 'name': seed.name + ' seeds', 'amount': seedAmount }
		}
	}

	// create array of seeds and amount instead of object
	for (let key in seedsToAdd) {
		// console.log('key', key);
		returnInventory.push(seedsToAdd[key])
	}

	return returnInventory;
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

	return getSeedArray(bestseeds)
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