const chalk = require('chalk');
const  yargs = require('yargs');
const notes = require ('./notes.js');
yargs.command({
  command:'add',
  describe:'To add new note',
  builder:{
    title:{
      describe:'Note Title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'Note Body ',
      demandOption: true,
      type:'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title,argv.body);
  }
})
yargs.command({
  command:'remove',
  describe:'To remove note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})

yargs.command({
  command:'read',
  describe:'To read one note',
  builder:{
    title:{
      describe:'Title of note',
      demandOption:true,
      type:'string'
    }
  },
  handler:function (argv) {
   notes.readNote(argv.title)
  }
})

yargs.command({
  command:'list',
  describe:'To list all notes',
  handler:function () {
    notes.getNotes();
  }
})
 yargs.parse();


// if(command === 'add')
// console.log('Add new note');
//   else if (command === 'remove')
//     console.log('Removing note');

