
/**
 * Module dependencies.
 */

var parseMidi = require('midi-file').parseMidi;
var fs = require('fs-extra');
var path = require('path');

// use `fs` to access every midi file
// run `transformMidi(file)`
// save that datastructure in a variable
// write that variable into a .js file.
// https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback

// /PB_Docs/Caf_Midi_Extractor_Files/Apple/Apple_Loops_for_GarageBand
var files = fs.readdirSync('/PB_Docs/Caf_Midi_Extractor_Files/Apple/Apple_Loops_for_GarageBand');
var presetMelodies = {};

files.forEach(function(file) {
  var file_path = path.resolve('/PB_Docs/Caf_Midi_Extractor_Files/Apple/Apple_Loops_for_GarageBand', file);
  var input = fs.readFileSync(file_path)
  var parsed = parseMidi(input);

  // Final preset data structure.
  presetMelodies[file] = {
    notes: []
  };

  var notes = parsed["tracks"][0];
  var total_time = 0;
  for (var i = 0; i < notes.length; i++) {
    if (notes[i]["meta"]) continue;
    presetMelodies[file]["notes"].push({
      pitch: notes[i]["noteNumber"],
      quantizedStartStep: total_time,
      quantizedEndStep: total_time + notes[i]["deltaTime"]
    });
    total_time = total_time + notes[i]["deltaTime"];
  }
});

// Write file to preset-melodies.js.
fs.writeFileSync('preset-melodies.js', JSON.stringify(presetMelodies, null, 2));




// console.log(files)


// use `fs` to get an array of all midi file paths.
// for each filepath, we parse the midi file
// `transformMidi(file)`
// save that new datat structure



// var parsed = parseMidi(input);





//
// console.log(JSON.stringify(parsed, 2, null))
//
// function transformMidi(midi) {
//   var notes = midi["tracks"][0]["notes"];
//   var ret = {
//     notes: []
//   }
//   var totalTicks = 0;
//   notes.forEach(function(note) {
//     ret["notes"].push({
//       pitch: toMidi(note["name"]),
//       quantizedStartStep: totalTicks,
//       quantizedEndStep: totalTicks + note["durationTicks"]
//     })
//     totalTicks = totalTicks + note["durationTicks"];
//   });
//   return ret;
// }
