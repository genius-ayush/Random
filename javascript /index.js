var  appDiv = document.getElementById("app") ; 

appDiv.querySelector('h1').textContent = "Hello DOM" ;

var newParagraph = document.createElement('p') ;

newParagraph.textContent = "This is a paragraph" ; 

appDiv.appendChild(newParagraph) ; 