// defining a promise is hard
// using a promise is easy 

// a Promise in javascript is an object that represents the eventual completion(or failure) of an asynchronous operation and its resulting value.

// callback way to doing things 
// function main(){
//     console.log("main function") ; 
// }
// setTimeout(main , 3000) ; 


// promise way of doing things 


// function callback(){
//     console.log("this is a callback function") ; 
// }

// function setTimeoutPromisified(ms){
//     let p = new Promise(resolve => setTimeout(resolve , ms)) ; 
//     return p ; 
// }

// setTimeoutPromisified(3000).then(callback); 


// function waitFor3Sec(resolve){
//     setTimeout(resolve , 3000) ; 
// }

// function cb(){
//     console.log("waited for 3 sec") ; 
// }

// waitFor3Sec(cb) ; 


// function random(promise){
//     // console.log(promise) ; 
// }

// let p = new Promise(random) ; 
// console.log(p) ;

// p.then(callback);

// function callback(){
//     console.log("promise succeded ")
// }
// // random(p); 


// write a promisified way of writing timeout finction 


// setTimeout(fn , 3000)

// function fn (){
//     console.log("called after 3 sec") ; 
// }


// function setTimeOutPromisified(time){
//     return new Promise((resolve)=>{
//         setTimeout(resolve , time) ; 
//     })
// }

// setTimeOutPromisified(3000).then(fn) ;



// Write the function that 
//  -> read the content of a file.
//  -> Trims the extra space from the left and right. 
//  -> Write it back to the file. 


// const fs = require('fs') ;

// fs.readFile('text.txt' , 'utf-8' , (err , data)=>{
//     if(err){
//         console.log("file do not exist") ; 
//     }else{
//         console.log(data) ; 
//     }
// }) ; 


// fs.readFilePromisified('text.txt' , 'utf-8').then(console.log(data)) ; 

// const fs = require('fs');
// class fsp{

//     constructor(path , encoded){
//         this.path = path , 
//         this.encoded = encoded
//     }

//     readFilePromisified(){
//         return new Promise((resolve , reject)=>{
//              fs.readFile(this.path , this.encoded , (err , data)=>{

//                 if(err){
//                     return reject(err) ; 
//                 }
//                 resolve(data) ; 
//              }) ; 
//         })
//     }
// }

// function fn(data){
//     console.log(data)
// }

// const fspv = new fsp("text.txt" , 'utf-8') ; 

// fspv.readFilePromisified().then(fn).catch((err) => {
//     console.error('Error reading file:', err);
//   });

// const fs = require('fs'); 

// function onDone() {
// 	console.log("file has been cleaned");
// }
// clearFile("text.txt", onDone)

// function clearFile(path , cb){

//     fs.readFile(path , "utf-8" , function(err , data){
//         if(err){
//             console.err() ; 
//         }else{
//             data = data.trim() ; 

//             fs.writeFile(path,data , function(){
//                 cb() ; 
//             } )
//         }
//     }) ; 

// }


// async function main() {
//     await cleanFile("a.txt")
//     console.log("Done cleaning file");
//  }
 
//  main();

//  function cleanFile(path){

//  }


// const p = new Promise()


// function waitFor3Sec(resolve){

//     setTimeout(resolve , 3000) ; 
// }

// function fn(){
//     console.log("function called") ; 
// }

// waitFor3Sec(fn) ; 


