# fuzzy-pancake
day week headers generator for WDIR

This generates daily headers for slack.

- Clone this repo
- `cd` into this repo
- `npm init` to initialize npm
- `npm i` to install `moment.js` and `fs` - the only packages required, one to manipulate dates and the other to save the output into a file


- There are two files `app.js` to make headers (I should rename it) and `table.js` to make the table of the schedule 
- Under the comment `Customizables` enter the start date of the cohort as a string in the `startDate` variable
  - Note: it will generate days for holidays and winter break 
- also, update the filename you'd like the file to be saved under. Currently it is `outrun-table.md` because the current cohort's name is `outrun`



It also has a table generator that links to specific folders. Instructors just need to put the topic inside of the `[]` for the link to link to the right folder for students to have as a reference. This has been one of the most requested things students have asked us.

To align the table generator with the links please use Kristyn's  bash folder generator

[WDIR Folder generator](https://github.com/kristynrb/WDI-Folder-Script)


Example of the table:

![table example](https://i.imgur.com/RNqP97N.png)
