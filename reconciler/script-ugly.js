function createDomElements(data){

    //clear all existing children of the parentElement
    parentElement.innerHTML = '' ; 

    let added = 0 ; 

    data.forEach(function(item){
        added++ ; 

        //Create a new element
        var childElement = document.createElement("div") ; 
        childElement.dataset.id = item.id; // store the id on the element for the future lok 

        var grandChildElement1 = document.createElement("span") ; 
        grandChildElement1.innerHTML = item.title ; 

        var grandChildElement2 = document.createElement('span') ; 
        grandChildElement2.innerHTML = item.description; 

        var grandChildElement3 = document.createElement("buttom") ; 
        grandChildElement3.innerHTML = "Delete" ; 
        grandChildElement3.setAttribute("onClick" ,"deleteTodo(" + item.id + ")")

        childElement.appendChild(grandChildElement1) ; 
        childElement.appendChild(grandChildElement2) ; 
        childElement.appendChild(grandChildElement3) ;
        parentElement.appendChild(childElement) ;  
    })

    console.log(added) ; 
}

window.setInterval(()=>{
    let todos = [] ; 

    for(let i = 0 ; i<Math.floor(Math.random() * 100) ; i++){
        todos.push({
            title : "Go to gym" , 
            description : "Go to gym from 10" , 
            id : i+1
        })
    }

    createDomElements(todos) 
}, 5000)