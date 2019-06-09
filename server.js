// import * as mm from '@magenta/music';
const mm = require('@magenta/music');
const express = require('express')
const melodies = require('./preset-melodies.json')
const fs = require('fs-extra');
// console.log(JSON.stringify(melodies))

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html') //Renders index.html when you do get request from route
})

const port = process.env.PORT || 8082

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', index.html))
})
app.listen(port, () => console.log(`server running on port ${port}`))

// const checkpoint = fs.readdirSync('/private/tmp/music_vae/train');
const checkpoint = '/private/tmp/music_vae/train';

//nodemon -> npm package that listens for your changes and restarts the server each time you save file.
//express => node framework (similar to django and python)

const model = new mm.MusicVAE(checkpoint);
const player = new mm.Player();

model
  .initialize()
  .then(() => {
    console.log("resolved")
    model.sample(1)
  })
  .then(samples => {
    player.resumeContext();
    player.start(samples[0])
  });