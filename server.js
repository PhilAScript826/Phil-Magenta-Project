console.log("hi")
const express = require('express')
const melodies = require('./preset-melodies.json')
const fs = require('fs-extra');
// console.log(JSON.stringify(melodies))

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html') //Renders index.html when you do get request from route
})

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`server running on port ${port}`))

var checkpoint = fs.readdirSync('/private/tmp/music_vae/train');

console.log(checkpoint)
//nodemon -> npm package that listens for your changes and restarts the server each time you save file.
//express => node framework (similar to django and python)