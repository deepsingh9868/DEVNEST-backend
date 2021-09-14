  
const fs = require('fs');
const program  = require('commander');


program
 .command('dir')
 .argument("dirname") 
 .description(`This will create a folder`)
 .action((dirname)=>{
     fs.mkdir(dirname,(err)=>{
         if(!err) console.log("folder has been created");
         else console.log("Folder already exists");
     })
 })


 program
 .command('wf')
 .argument("filename")
 .argument("content")
 .description(`This will create a file if it doesn't exit otherwise overwrite`)
 .action((filename,content)=>{
     fs.writeFile(filename,content,(err)=>{
         if(!err) console.log("file has been created");
         else console.log(err);
     })
 })


 program
 .command('af')
 .argument("filename")
 .argument("content")
 .description(`This will append the new content behind the existing content`)
 .action((filename,content)=>{
     fs.appendFile(filename,content,(err)=>{
         if(!err) console.log("file content has been appended");
         else console.log(err);
     })
 })


 program
 .command('rf')
 .argument("filname")
 .description(`This will read a file`)
 .action((filename)=>{
     fs.readFile(filename,"utf8", (err,data)=>{
         if(!err){
             console.log(data);
         }
         else console.log("No such file or directory");
     })
 })

 program
 .command('rename')
 .argument("filname_prev")
 .argument("filname_new")
 .description(`This will rename a existing file`)
 .action((filename_prev,filename_new)=>{
     fs.rename(filename_prev,filename_new, (err)=>{
         if(!err) console.log("file has been renamed")
         else console.log("Cannot find file ");
     })
 })


 program
 .command('dfile')
 .argument("filname")
 .description(`This will delete a existing file`)
 .action((filename)=>{
     fs.unlink(filename,(err)=>{
         if(!err) console.log("file has been deleted");
         else console.log("No such file");
     })
 })


 program
 .command('dfolder')
 .argument("foldername")
 .description(`This will delete a existing folder`)
 .action((foldername)=>{
     fs.rmdir(foldername, (err)=>{
         console.log("No such file");
     });
 })
 


 program.parse();