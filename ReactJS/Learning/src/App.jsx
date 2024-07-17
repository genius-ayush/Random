import { useState } from "react";
import "./App.css";
import IncreaseDecrease from "./IncreaseDecrease";
import Cards from "./Cards";

function App() {

  let propObject ={
    title : "ayush" , 
    content : "my hame is ayush"
  }
  
  return (
    <>
      {/* <IncreaseDecrease/> */}
      <Cards object={propObject}/>
    </>
  );
}

export default App;
