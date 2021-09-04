

// Brief introduction to async functions and calling

// const fs = require('fs');


// when you use async then you have to use callback function 
// fs.writeFile('read.txt',"async with node",(err)=>{
//     console.log("file is created");
// });



// when you pass a function as an argument into a function that's is called callback function

// fs.appendFile('read.txt', " this is nothing", (err) =>{
//     console.log("new data has been appened to the exiting one");
// });


// reading a file asyncronously  and to avoid buffer data we use "utf8" file encoding

// fs.readFile('read.txt', "utf8", (err,data) =>{
//     console.log(data);
// })




// CRUD challenge 

// 1) Create a folder named CURD using Node
// 2) Create a file inside CRUD named "bio.txt" and add "my name is deepak";
// 3) Add more data into the file at the end of the existing data
// 4) Read this data without getting the buffer data at first
// you have to do file encoding here - hint
// 5) Rename your file bio.txt to my_bio.txt
// 6) delete all this 

const fs = require('fs');

// 1) 
fs.mkdir("CRUD",(err) =>{
    console.log("CRUD folder has been created");
});

// 2)
fs.writeFile('CRUD/bio.txt', "my name is deepak ", (err)=>{
    console.log("new file has been created in CRUD folder");
});


// 3
fs.appendFile('CRUD/bio.txt', " new appeneded data is here", (err)=>{
    console.log("new data has been added to the existing one in bio.txt");
});


// 4)
fs.readFile('CRUD/bio.txt', "utf8", (err,data) =>{
    console.log(data);
});

// 5)
fs.rename('CRUD/bio.txt', 'CRUD/my_bio.txt', (err)=>{
    console.log("name has been changed to my_bio.txt");
});


// 6
fs.unlink('CRUD/bio.txt', (err)=>{
    console.log("file is deleted");
});