class Seed {
    constructor(name = '', level = 0, xp = 0, type = '') {
        this.name = name;
        this.level = level;
        this.xp = xp;
        this.type = type;
        seedlist.push(this);
    }
}

export { Seed }