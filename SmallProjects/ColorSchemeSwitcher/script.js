var colors = document.querySelectorAll("#button") ; 
console.log(colors) ; 

var body = document.querySelector("body")

colors.forEach(function(color){
    console.log(color) ; 
    color.addEventListener('click' , function(e){
        console.log(e) ; 
        console.log(e.target) ; 
        body.style.backgroundColor = e.target.className
    })
})