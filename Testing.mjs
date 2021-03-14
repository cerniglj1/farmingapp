import { createRequire } from 'module';
const require = createRequire(import.meta.url);


let seeds = require('./data/seeds.json')

console.log(seeds[1].name)
