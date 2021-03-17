const locationlist = []; //list of all patches
const { patchlist } = require('./patch.js');

class Location {
    constructor({name, id, coordinates}) {
        this.name = name;
        this.id = id;
        this.coordinates = coordinates;
        this.generatePatches();

    }

    parsePatchId(patch) {
        return patch.id.slice(0,1);
    }

    generatePatches() {
        let generatedpatches = []
        for (let num in patchlist) {
            if (patchlist[num].id.slice(0,2) !== this.id) {
            } else if ((patchlist[num].id.slice(0,2) === this.id) && (this.id === undefined)) {
                generatedpatches.push(patchlist[num]);
            } else if ((patchlist[num].id.slice(0,2) === this.id) && (this.id !== undefined)) {
                generatedpatches.push(patchlist[num]);
            }
        }
        this.patches = generatedpatches
    }
}

module.exports = {
    locationlist: locationlist,
    Location: Location
};