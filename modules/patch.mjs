class Patch {
    constructor(location = '', seeds = [], type = '', location_name = '') {
        this.location = location;
        this.type = type;
        patchlist.push(this);
        this.generateSeeds();
        this.location_name = location_name;

    }

    generateSeeds() {
        let generatedseeds = []
        for (let num in seedlist) {
            if (seedlist[num].type !== this.type) {
            } else if ((seedlist[num].type === this.type) && (this.seeds === undefined)) {
                generatedseeds.push(seedlist[num]);
            } else if ((seedlist[num].type === this.type) && (this.seeds !== undefined)) {
                generatedseeds.push(seedlist[num]);
            }
            this.seeds = generatedseeds
        }
        //console.log(this.location + "'s seed gen")
        //console.log(this.seeds)
    };
    // not currently used, may get rid of this.
    minseed() {
        //this returns the smallest/largest level for the seeds in the patch
        let seedlist = [];
        for (let num in this.seeds) {
            seedlist.push(this.seeds[num].level);
        }
        //console.log((Math.min(...seedlist)));
    }
    maxseed(player) {
        //this returns the smallest/largest level for the seeds in the patch
        let returnseed = Babyseed // Baby seed is a placeholder seed
        for (let num in this.seeds) {
            if ((this.seeds[num].level <= player.level) &&
                (this.seeds[num].level >= returnseed.level)) {
                returnseed = this.seeds[num]
            }
        }
        return(returnseed)
    }
}

export { Patch };