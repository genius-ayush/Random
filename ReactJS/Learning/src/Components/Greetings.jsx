import React from 'react'

function Greetings() {
  return (
    <div>
    <div>Greetings</div>
    <Greet name={"ayush"}/>
    </div>
  )
}

function Greet(props){
    return <>
   Hey there {props.name}
   </>
}

export default Greetings