// DEPENDENCIES
const moment = require('moment')
moment().format()
const fs = require('fs')

// CUSTOMIZABLES
// startDate should be a Monday - remove row if cohort starts on a Tuesday

// choose to edit the customizables in this file or just use arguments when running from terminal
// ie typing:
// node table.js 09-03-2018 WDIR-September-2018-Syllabus-w-Dates.md
// is the same as below
let startDate = process.argv[2] || '09-03-2018' //   day (2 digits), month (2 digits), year (4 digits)
const fileName = process.argv[3] || 'WDIR-September-2018-Syllabus-w-Dates.md'

// Properly format date using moment
startDate = moment(startDate, 'MM-DD-YYYY')

// BUILDING BLOCKS
let table = ''
let row = ''
let header = '| Day | Weekday | Morning Exercise | Lectures | Labs | Homework |\n'
let tableFormat = '|:---:|:-----------:|:-------:|:-----------:|:-----------:|:-----------:|:-----------:|\n'
let nextDate = startDate
let addDays = 3

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
    // skip Saturdays and Sundays
    if (moment(nextDate).format('dddd') === 'Friday') {
      addDays = 3
    } else { addDays = 1 }
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
    row += moment(nextDate).format('dddd') // Monday |
    row += ` | [](./${unit}/w${week}d0${j}/morning_exercise)| [](./${unit}/w${week}d0${j}/instructor_notes)| [](./${unit}/w${week}d0${j}/student_labs)|[](./${unit}/w${week}d0${j}/homework)|`
    row += '\n'

    // keep compiling all the rows into one big blob
    table += row

    nextDate = moment(nextDate).add(addDays, 'days')
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
