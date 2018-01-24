//DEPENDENCIES
const moment = require ('moment');
const fs     = require ('fs');

//CUSTOMIZABLES
var startDate = '20180212'; //year, month (2 digits), day (2 digits)

const fileName = './' + 'outrun-table.md'


//BUILDING BLOCKS
let table = ""
let row = "";
let header = "| Day | Date | Weekday | Morning Exercise | Morning Lecture/Lab | Afternoon Lecture/Lab | Homework |\n"
let tableFormat = "|:---:|:-----------:|:-------:|:-----------:|:-----------:|:-----------:|:-----------:|\n";
let nextDate = startDate;
let superMessage;


table += header;
table +=tableFormat;

//Make the rows by days

//week loop
for (let i = 1; i <= 14; i++){
  week = i;

  //day loop
  for (let j = 1; j <=5; j++ ){
    row = "";
    //skip Saturdays and Sundays
    if (moment(nextDate.toString()).format('dddd')==='Friday'){
      addDays = 3;
    } else {addDays = 1;}
    day = j;
    //Build the Message
    row += "| w" + week + "d"+ j +" |"; // | w01d01 |
    row += moment(nextDate.toString()).format('MMMM D') + " |"; // February 12 |
    row += moment(nextDate.toString()).format('dddd') + " |"; // Monday |
    row += " | | | |"
    row += "\n"

    //keep compileing all the rows into one big blob
    table += row;
    // console.log(row);
    console.log(addDays);
    nextDate = moment(nextDate.toString()).add(addDays,'days').toString()
  } //closes j loop
  console.log(table);
} // closes i loop


//save it to a plain text file, not multiple calls will add to the file, not replace it
fs.writeFile(fileName,
table, function(err){
  if(err){
    return console.log(err);
  }
  console.log("The file was saved")
})
