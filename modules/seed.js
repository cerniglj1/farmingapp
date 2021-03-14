const seedlist = []; //list of all seeds

class Seed {
    constructor({ name, level, xp, type}) {
        this.name = name;
        this.level = level;
        this.xp = xp;
        this.type = type;
    }
}

module.exports = {
    seedlist: seedlist,
    Seed: Seed
};