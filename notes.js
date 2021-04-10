const fs = require('fs')
const chalk = require('chalk')


const addNote = (title,body)=>{
	const notes = loadNotes()
	
	// not time efficient
	/*const duplicateNotes = notes.filter((note) => {
		return note.title === title
		})*/
	
	//
	const duplicateNote = notes.find((note) => note.title === title)
	
	if(duplicateNote=== undefined){
		notes.push({
			title : title,
			body : body
		})
	
		saveNotes(notes)
		console.log(chalk.green.inverse("New note added!"))
		
	}
	else
	console.log(chalk.red.inverse('Note title taken!'))
	
}


const removeNote = (title) => {
	const notes = loadNotes()
	const filterArray = notes.filter((note) => note.title !== title);
	if(filterArray.length == notes.length)
	console.log(chalk.bgRed("no note found"))
	else
	{
		console.log(chalk.bgGreen("note removed"))
		saveNotes(filterArray)
	}
	
	
	
}


	
const listNotes = () => {
	const notes = loadNotes()
	console.log(chalk.yellow("your complete list"))
	
	notes.forEach((note) => {
		console.log(chalk.blue(note.title))
		console.log(note.body)
	})
	
	
}


const readNote = (title) => {
	const notes = loadNotes()
	const read = notes.find((note) => note.title === title)
	if(read !== undefined){
		console.log(chalk.magenta(read.title))
		console.log(read.body)
	}
	
	else
	console.log(chalk.red("No record found"))
	
}

const saveNotes = (notes) => {
	const dataJson = JSON.stringify(notes)
	fs.writeFileSync('notes.json',dataJson)
	
	
	}

const loadNotes = () => {
	try{
		const dataJson = fs.readFileSync('notes.json')
		const dataBuffer = dataJson.toString()
		return JSON.parse(dataBuffer)
	}  
	catch(e){
		return []
	}
}


module.exports = {
	
	addNote : addNote,
	removeNote : removeNote,
	listNotes : listNotes,
	readNote : readNote
}
