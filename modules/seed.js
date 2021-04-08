const seedlist = []; //list of all seeds

class Seed {
    constructor({ name, level, xp, type }) {
        this.name = name;
        this.level = level;
        this.xp = xp;
        this.type = type;
    }
    getSeedAmount = () => {
        let seedAmount = 1;
        switch (this.type) {
            case 'flower':
                seedAmount = 1;
                break;
            case 'herb':
                seedAmount = 1;
                break;
            case 'allotment':
                seedAmount = 3;
                break
            case 'tree':
                seedAmount = 1;
                break
            default:
                seedAmount = 1;
                break;
        }
        return seedAmount;
    }
}

module.exports = {
    seedlist: seedlist,
    Seed: Seed
};