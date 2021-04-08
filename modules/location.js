const locationlist = []; //list of all patches
const { patchlist } = require('./patch.js');

class Location {
    constructor({ name, id, coordinates }) {
        this.name = name;
        this.id = id;
        this.coordinates = coordinates;
        this.generatePatches();

    }

    generatePatches = () => {
        let generatedpatches = []
        for (let num in patchlist) {
            if (patchlist[num].id.slice(0, 2) !== this.id) {
            } else if ((patchlist[num].id.slice(0, 2) === this.id) && (this.id === undefined)) {
                generatedpatches.push(patchlist[num]);
            } else if ((patchlist[num].id.slice(0, 2) === this.id) && (this.id !== undefined)) {
                generatedpatches.push(patchlist[num]);
            }
        }
        this.patches = generatedpatches
    }

    distanceFrom = (destination) => {
        let xdistance = (this.coordinates[0] - destination.coordinates[0]) ** 2;
        let ydistance = (this.coordinates[1] - destination.coordinates[1]) ** 2;
        return xdistance + ydistance
    }
}

module.exports = {
    locationlist: locationlist,
    Location: Location
};