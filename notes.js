const fs = require('fs');
const chalk = require('chalk');

const getNotes =  () => {
    console.log(chalk.green.inverse('Notes List'))
    const notes = loadNotes();
    notes.forEach(note => console.log(chalk.green.underline(note.title)))
}
const addNotes = (title,body) => {
    const notes = loadNotes();
    // const duplictaeNotes = notes.filter(note =>note.title === title);
    const duplicatedNote = notes.find(note => note.title === title);
    // depugger
    if(!duplicatedNote){
        notes.push({title:title,body:body});
        saveData(notes);
        console.log(chalk.green.inverse('New note added'));
    }else{
        console.log(chalk.red.inverse('Note title is taken'));
    }

}
const  removeNote =  (title) => {
   const notes = loadNotes();
   // const index = notes.findIndex(note=> note.title === title);
    const filteredNotes = notes.filter(note=>note.title != title)
   if(notes.length != filteredNotes.length){
       // notes.splice(index,1);
       saveData(filteredNotes);
       console.log(chalk.green.inverse('Note deleted successfuly'));
   }else{
       console.log(chalk.red.inverse('Note can\'t be found'));
   }
}
const  readNote = function (title) {
    const notes = loadNotes();
    const targetNote = notes.find(note => note.title === title);
    if(targetNote){
        console.log(chalk.green.inverse(targetNote.title));
        console.log(targetNote.body)
    }
}

const saveData =  (notes) => {
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesJson)
}
const loadNotes =  () => {
    try{
        const notesBuffer = fs.readFileSync('notes.json');
        const notesString = notesBuffer.toString();
        return JSON.parse(notesString);
    } catch(e){
        return [];
    }
}
module.exports ={
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    readNote: readNote
};
// module.exports = getNotes(); return what function return
// module.exports = getNotes; return what function itselfe

