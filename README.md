# fuzzy-pancake

Day-week headers and syllabus tables generators for WDIR

Generate syllabus tables and headers for WDIR

Each generator uses the WDIR file structure for the repo so that relative links are automatically generated. Adding link material only requires the name inside the square brackets

![markdown](https://i.imgur.com/PkYUuwX.png)

To align the table generator with the links please use Kristyn's bash folder generator for your repo or customize the script to match your structure

[WDIR Folder generator](https://github.com/kristynrb/WDI-Folder-Script)

## How to Install

- Clone this repo
- `cd` into this repo
- `npm i` to install `moment.js`* - the package require to work with the dates ( Optional if date generation is not required)
- Note: also uses `fs` - to create the file - but hat is already part of Node

### Table Options

- There are a few files to choose from
    - table-generator.js Simple, no frills no date markdown table generator

    ![simple table](https://i.imgur.com/F820Scf.png)

    - table-generator-w-days.js Simple but keeps track of Monday - Friday where d1 always is a Monday and d5 is always a Friday

    ![table with days](https://i.imgur.com/3rSRAHt.png)

    - table-generator-w-dates.js fills in full dates

    ![table with dates](https://i.imgur.com/WZsBp5A.png)

    - Slack Headers - this is WDIR - specific for providing zoom links in slack

### Generating Tables
run `node table-generator.js` to create the default table    

- Under the comment `Customizables` enter the start date of the cohort as a string in the `startDate` variable *OR* use arguments in node (see file for details)
  - Note: it will generate days for holidays and winter break, these tend to be minor adjustments and I have been making them manually, as needed.
- also, update the filename you'd like the file to be saved under. Currently it is `WDIR-September-2019-Syllabus.md`

- For relative pathing could be swapped out for absolute pathing.


Example of a filled out table:

![table example](https://i.imgur.com/RNqP97N.png)
