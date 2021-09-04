
// CURD opertions  

// challenge 

// 1) Create a folder named CURD using Node
// 2) Create a file inside CRUD named "bio.txt" and add "my name is deepak";
// 3) Add more data into the file at the end of the existing data
// 4) Read this data without getting the buffer data at first
// you have to do file encoding here - hint
// 5) Rename your file bio.txt to my_bio.txt
// 6) delete all this 


const fs =    require('fs');
// This will make a folder named CURD
// fs.mkdirSync("CRUD");

// Now create a file inside CURD named

// fs.writeFileSync('CRUD/bio.txt', "my name is deepak");

// This method append data doesn't overwrite the existing one
fs.appendFileSync('CRUD/bio.txt', "my name is changed");

// reading data without getting buffered data at first

const data = fs.readFileSync('CRUD/bio.txt', "utf8");
console.log(data);

// now rename the file bio.txt to my_bio.txt
fs.renameSync('CRUD/bio.txt', 'CRUD/my_bio.txt');


//now delete the file and then folder
fs.unlinkSync('CRUD/my_bio.txt');

// now delete the folder "CRUD"
fs.rmdirSync('CRUD');