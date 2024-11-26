// import { useState } from 'react'
// import { useEffect } from 'react'
import React from 'react'
import './App.css'

// let todo = {
//   title : "gym" , 
//   description : "go to gym from 8am - 9 am" , 
//   id : 1
// }

// var todoForToday = {

//   title : "Go to gym " , 
//   description : "Go to gym from 5-6 pm " , 
//   id : 1
// }


function App() {
  
//   const [todos , setTodos] = useState([{
//     title : "Go to gym " , 
//     description : "Go to gym from 5-6 pm " , 
//     id : 1
//   },

//   {
//     title : "take classes " , 
//     description : "Go to gym from 7-8 pm " , 
//     id : 2
//   } ,
//   {
//     title : " Go to sleep " , 
//     description : "Go to gym from 9-6 am " , 
//     id : 3
//   }
// ])
  
  // setInterval(()=>{
  //   setTodoForToday ( {
  //     title : "Go to eat " , 
  //     description : "Go to eat from 7-8 pm " , 
  //     id : 2
  //   })
  // }, 5000)

  const [todoForToday , setTodoForToday] = React.useState({
    title : "gym" ,
    description : "go to gym from 8-9" , 
    id : 1
  })

  console.log("Render") ; 
  React.useEffect( ()=>{
    console.log("hi from useEffect") ; 
    setInterval(()=>{
      setTodoForToday({
        title : "go to gym"+ Math.random() , 
        description : "go to gym from 8-10" , 
        id : 2
      })
    }, 1000)
  } , [])


  return (

    <div>

      {todoForToday.id}
      <br />
      {todoForToday.title}
      <br /> 
      {todoForToday.description}
      

      {/* {todos.map((todo)=>{

        return <Todo title = {todo.title} description = {todo.description}></Todo>
  
        // return <div>
        //   {todo.id }  
        //   {todo.title}
        //   {todo.description}
        // </div>
      })} */}
    </div>
  )
}

// function Todo(props){

//   return <div>
//     {props.id}
//     {props.title} 
//     {props.description}
//   </div>
// }


export default App
