const { seedlist, Seed } = require('../modules/seed.js');
const { patchlist, Patch } = require('../modules/patch.js');
let patches = require('../data/patches.json');
const seeds = require('../data/seeds.json');

//creating all seeds in
for (let num in seeds) {
    seedlist[seeds[num].name] = new Seed(seeds[num]);
}
for (let num in patches) {
    patchlist[patches[num].id] = new Patch(patches[num]);
}
console.log(seedlist);
console.log(patchlist);

exports = { seedlist, patchlist };