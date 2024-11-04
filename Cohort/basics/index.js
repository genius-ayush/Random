// var fs = require('fs') ; 

// const content = fs.readFileSync("text.txt" , "utf-8")

// console.log(content)

// console.log("hi") ; 

// function sum (a , b){
//     return a+b ; 
// }

// function div(a , b){
//     return a/b ; 
// }

// function multi(a , b){
//     return a*b ; 
// }

// function sub(a , b){
//     return a-b ; 
// }

// function find(a , b , op){
//     return op(a , b) ; 
// }

// var ans = find(2 , 3 , sum) ; 
// console.log(ans) ; 

// const fs = require("fs") ; 



// fs.readFile("text.txt" , "utf-8" , callback)




// function callback(err , data){

//     if(err){
//         console.log(err) ; 
//     }else{

//         console.log(data) ; 
//     }
// }

console.log("top")

function cb1(){
    setTimeout(cb2 , 5000); 
    console.log("after 10 sec") ; 

}

function cb2(){
    console.log("after 5 sec") ; 
}

setTimeout(cb1, 10000);

// setTimeout(cb2 , 500); 


console.log("down") ; 