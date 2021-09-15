  // Usage 
  // node index.js to get all info about command 
  // node index.js [command]
  
const fs = require('fs');
const program  = require('commander');


program
 .command('dir')
 .argument("dirname")
 .description(`This will create a folder`)
 .action((dirname)=>{
     fs.mkdirSync(dirname)
})


 program
 .command('wf')
 .argument("filename")
 .argument("content")
 .description(`This will create a file if it doesn't exit otherwise overwrite`)
 .action((filename,content)=>{
     fs.writeFileSync(filename,content)
 })


 program
 .command('af')
 .argument("filename")
 .argument("content")
 .description(`This will append the new content behind the existing content`)
 .action((filename,content)=>{
     fs.appendFileSync(filename,content)
 })


 program
 .command('rf')
 .argument("filname")
 .description(`This will read a file`)
 .action((filename)=>{
     const data = fs.readFileSync(filename,"utf8");
     console.log(data); 
 })
  
 
 program
 .command('rename')
 .argument("filname_prev")
 .argument("filname_new")
 .description(`This will rename a existing file`)
 .action((filename_prev,filename_new)=>{
     fs.renameSync(filename_prev,filename_new)
 })


 program
 .command('dfile')
 .argument("filname")
 .description(`This will delete a existing file`)
 .action((filename)=>{
     fs.unlinkSync(filename)
 })
 


 program
 .command('dfolder')
 .argument("filname")
 .description(`This will delete a existing folder`)
 .action((filename)=>{
     fs.rmdirSync(filename)
 })


 program.parse();