const Express = require('express');
const Mainapp = require('./app.js');

const express = Express();
const port = 3001;

express.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

express.get('/:username', async (req, res) => {
    const { username } = req.params;
    const inventory = await Mainapp.main(username)
        .then((inventory) => res.json(inventory))
        .catch(error => console.log(error))
})

express.listen(port, () => console.log(`Listening on Port ${port}`))