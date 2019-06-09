import { MusicVAE, Player } from '@magenta/music';

const checkpoint = '/private/tmp/music_vae/train';

//nodemon -> npm package that listens for your changes and restarts the server each time you save file.
//express => node framework (similar to django and python)

const model = new MusicVAE(checkpoint);
const player = new Player();

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