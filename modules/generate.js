const { seedlist, Seed } = require('../modules/seed.js');
const { patchlist, Patch } = require('../modules/patch.js');
const { locationlist, Location } = require('../modules/location.js');
const { teleportlist, Teleport } = require('../modules/teleport');
const seeds = require('../data/seeds.json');
const patches = require('../data/patches.json');
const locations = require('../data/locations.json');
const teleports = require('../data/teleports.json');

console.log('generating seeds')
for (let num in seeds) {
        seedlist[seeds[num].name] = new Seed(seeds[num]);
}
console.log('seeds generated')

console.log('generating patches')
for (let num in patches) {
    patchlist[patches[num].id] = new Patch(patches[num]);
}
console.log('patches generated')

console.log('generating teleports')
for (let num in teleports) {
    teleportlist[num] = new Teleport(teleports[num]);
}
console.log('teleports generated')

console.log('generating locations')
for (let num in locations) {
    locationlist[locations[num].id] = new Location(locations[num]);
}
console.log('locations generated')
console.log(`Distance to ${locationlist.L5.name} from ${teleportlist[0].name}`)
console.log(locationlist.L5.distanceFrom(teleportlist[0]))
//console.log(distanceFrom(locationlist[1]));

module.exports = {
    seedlist: seedlist,
    patchlist: patchlist,
    locationlist: locationlist,
    teleportlist: teleportlist
};