const { farmingLevel } = require('./playerlookup');

class Player {
    constructor( username, quests ) {
        //he be a leet boy
        this.username = username;
        this.quests = quests;
        this.level = farmingLevel(this.username).then((value) => {return value})
    }
}

module.exports = {
    Player: Player
}