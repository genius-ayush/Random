// What is a callback function in javascript 


// setTimeout(function(){
//     console.log("ayush") ; 
// } , 5000) ; 


// function x(y){
//     console.log("x") ; 
//     y() ; 
// }

// x(function y(){
//     console.log("y") ; 
// })


// Javascript is a synchronous and single-threaded language

// Blocking the main thread

// Power of callback ?

// Deep about event listners

// Closures demo with event listners

// Scope Demo with Event Listners

// Garbage collection and removeElementListners

function attachEventListners(){

    let count = 0 ; 
    
    document.getElementById("clickMe").addEventListener("click" , function(){
        console.log("Button Clicked" , ++count) ; 
    })
}
attachEventListners(); 

