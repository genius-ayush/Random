document.addEventListener("DOMContentLoaded" , ()=>{
    const todoInput = document.getElementById("todo-input") ;
    const todoList = document.getElementById("todo-list") ;


    todoInput.addEventListener("keydown" , (e)=>{
        console.log(e) ;
        if(e.key === 'Enter' &&  todoInput.value.trim() !== ""){
            addTodoItems(todoInput.value.trim()) ;
            console.log(todoInput.value) ;  
            todoInput.value = ""
        }
    })



function addTodoItems(todoText){
    
    var todoItem = document.createElement("li") ; 
    console.log(todoItem.classList)
    //completed button
    var completedButton = document.createElement("button") ; 
    completedButton.innerHTML = "&#x25EF;"
    completedButton.classList.add("complete-button") ; 
   
    completedButton.addEventListener("click" , ()=>{
        todoItem.classList.toggle("completed") ;
    })

    //delete button 
    var deleteButton = document.createElement("button") ; 
    deleteButton.innerHTML = "&#x2715;"
    deleteButton.classList.add("delete-button") ;
    
    deleteButton.addEventListener("click" , ()=>{
        todoItem.remove() ;
    })

    //items add 

    const todoTextNode = document.createElement("span") ;
    todoTextNode.textContent = todoText ; 
    todoTextNode.classList.add("todo-text") ;

    // append todo elements to the todo items
    todoItem.appendChild(completedButton) ;
    todoItem.appendChild(todoTextNode) ;
    todoItem.appendChild(deleteButton) ;

    todoList.appendChild(todoItem) ; 

}

})