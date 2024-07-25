const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');
const { error } = require('console');

// Parse the command-line arguments
const argv = yargs(hideBin(process.argv)).argv;

// Extract the name input
const name = argv._[0];
const data = 'You are awesome'
fs.writeFile(name , data ,'utf-8',(error)=>{
    if(error) throw error;
    console.log('File created successfully');
}  )




console.log('Input name:', name);
