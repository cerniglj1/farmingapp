const fetch = require('node-fetch');
let baseurl = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=';

const constructUrl = (username) => {
    return baseurl + username.replace(/\s/g, '%20');
}

const farmingLevel = async (username) => {

    const fetcheddata = await fetch(constructUrl(username))

    let fetchedtext = await fetcheddata.text();
    let levels = fetchedtext.split(',');
    let farminglevel = levels[41];

    return await farminglevel;

}

farmingLevel('Jane Solo').then((value) => {console.log(value)})

module.exports = {
    farmingLevel: farmingLevel
}








public async Task MyMethodAsync()
{
    Task<int> longRunningTask = LongRunningOperationAsync();
    // independent work which doesn't need the result of LongRunningOperationAsync can be done here

    //and now we call await on the task
    int result = await longRunningTask;
    //use the result
    Console.WriteLine(result);
}

public async Task<int> LongRunningOperationAsync() // assume we return an int from this long running operation
{
    await Task.Delay(1000); // 1 second delay
    return 1;
}
























