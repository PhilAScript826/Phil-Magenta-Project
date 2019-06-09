console.log("hi")
const express = require('express')
const melodies = require('./preset-melodies.json')
// console.log(JSON.stringify(melodies))

// const fs = require('fs');
// let rawdata = fs.readFileSync('student.json');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`server running on port ${port}`))