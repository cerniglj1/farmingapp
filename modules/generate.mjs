import { createRequire } from 'module';
const require = createRequire(import.meta.url);


let seeds = require('./data/Seeds.json')

console.log(seeds[1].name)