const { seedlist, Seed } = require('../modules/seed.js');
const { patchlist, Patch } = require('../modules/patch.js');
const { locationlist, Location } = require('../modules/location.js');
const { teleportlist, Teleport } = require('../modules/teleport');
const seeds = require('../data/seeds.json');
const patches = require('../data/patches.json');
const locations = require('../data/locations.json');
const teleports = require('../data/teleports.json');

console.log(`Generating ${seeds.length} seeds, ${patches.length} patches, ${locations.length} locations and ${teleports.length} teleports.`)
for (let num in seeds) {
        seedlist[seeds[num].name] = new Seed(seeds[num]);
}
console.log('seeds generated')

for (let num in patches) {
    patchlist[patches[num].id] = new Patch(patches[num]);
}
console.log('patches generated')

for (let num in teleports) {
    teleportlist[num] = new Teleport(teleports[num]);
}
console.log('teleports generated')

for (let num in locations) {
    locationlist[locations[num].id] = new Location(locations[num]);
}
console.log('locations generated')

module.exports = {
    seedlist: seedlist,
    patchlist: patchlist,
    locationlist: locationlist,
    teleportlist: teleportlist
};