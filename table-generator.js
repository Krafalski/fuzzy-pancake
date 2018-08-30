// DEPENDENCIES
const fs = require('fs')

// CUSTOMIZABLES
// choose to edit the customizables in this file or just use arguments when running from terminal
// ie typing:
// node table.js WDIR-September-2018-Syllabus-w-Dates.md
const fileName = process.argv[3] || 'WDIR-September-2018-Syllabus.md'

// Properly format date using moment

// BUILDING BLOCKS
let table = ''
let row = ''
let header = '| Day | Morning Exercise | Lectures | Labs | Homework |\n'
let tableFormat = '|:---:|:-----------:|:-------:|:-----------:|:-----------:|:-----------:|:-----------:|\n'

// Only make one header and tableFormat
table += header
table += tableFormat

// Make the rows by days

// week loop
for (let i = 1; i <= 14; i++) {
  let week = i
  if (i < 10) {
    week = '0' + i
  }

  // day loop
  for (let j = 1; j <= 5; j++) {
    row = ''
    // determine unit
    let unit = ''
    if (week < 5) {
      unit = 'unit_1'
    } else if (week < 8) {
      unit = 'unit_2'
    } else if (week < 10) {
      unit = 'unit_3'
    } else if (week < 12) {
      unit = 'unit_4'
    } else {
      unit = 'unit_5'
    }
    // Build the Table with links
    row += '| w' + week + 'd' + j + ' |' // | w01d01 |
    row += `[](./${unit}/w${week}d0${j}/morning_exercise)| [](./${unit}/w${week}d0${j}/instructor_notes)| [](./${unit}/w${week}d0${j}/student_labs)|[](./${unit}/w${week}d0${j}/homework)|`
    row += '\n'
    // keep compiling all the rows into one big blob
    table += row
  } // closes j loop
} // closes i loop

// save it to a plain text file
// note multiple calls will replace file
fs.writeFile(fileName,
  table, function (err) {
    if (err) {
      console.log(err)
    }
    console.log(`The file was saved as ${fileName}`)
  })
