// class Rectange{

//     constructor(width , height , color){
//         this.width = width ;
//         this.height = height ; 
//         this.color = color ;
//     }

//     area(){
//         const area = this.width * this.height ; 
//         return area ; 
//     }

//     paint(){
//         console.log(`painting the box to ${this.color}`) ; 
//     }
// }

// const rect = new Rectange(10 , 20 , "red"); 
// rectArea = rect.area() ; 
// console.log(rectArea) ;     

// const now = new Date() ; 
// console.log(now.getMonth()); 

// let user = {
//     name : "ayush"  , 
//     age : 21
// }

// user.name = "ayush rawal" ; 
// user["age"] = 22
// console.log(user.name) ;
// console.log(user.age) ; 

const map = new Map(); 

map.set("namee" , "ayush") ; 
map.set("age" , 21) ; 

console.log(map) ; 
let a = map.get("age")
console.log(a) ; 
