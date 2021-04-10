 
const notes = require("./notes.js")
const yargs = require("yargs")
const chalk = require('chalk')


//create add command

yargs.command({
	command : 'add',
	describe : 'Add a new note',
	builder :{
		
		
		title : {
			describe : 'Note title',
			demandOption : true,
			type : 'string'
			},
			
		body : {
			describe : 'body of the note',
			demandOption : true,
			type : 'string'
			}
	},
	handler : (argv) => {
		notes.addNote(argv.title,argv.body)
	}
	})
	
//create remove command

yargs.command({
	command : 'remove',
	describe : 'Removing a note',
	builder : {
		title : {
			describe : 'note title',
			demandOption : true,
			type : 'string'
		}
	},
			
	handler : (argv) => {
		notes.removeNote(argv.title)
		
	}
})

// create list command

yargs.command({
	command : 'list',
	describe : 'list all the notes',
	handler : () => notes.listNotes()
	})
	
// create read command

yargs.command({
	command : 'read',
	describe : 'read note',
	builder : {
		title :{
			describe : "title to be read",
			demandOption : true,
			type : 'string'
		}
	},
	handler : (argv) => notes.readNote(argv.title)
	})

yargs.parse()
