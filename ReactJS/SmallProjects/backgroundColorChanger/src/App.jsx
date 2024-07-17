import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className=" h-screen w-full flex content-center justify-center items-center" style={{backgroundColor:color}}>
        <div className=" flex gap-5">
          <button onClick={()=>setColor("orange")}  className="p-10 rounded-md border-block border-2" style={{backgroundColor: "orange"}}>orange</button>
          <button onClick={()=>setColor("blue")}  className="p-10 rounded-md border-block border-2" style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={()=>setColor("red")} className="p-10 rounded-md border-block border-2" style={{backgroundColor: "red"}}>red</button>
          <button onClick={()=>setColor("green")} className="p-10 rounded-md border-block border-2" style={{backgroundColor: "green"}}>green</button>
          <button onClick={()=>setColor("white")} className="p-10 rounded-md border-block border-2" style={{backgroundColor: "white"}}>white</button>
          
        </div>
      </div>
    </>
  );
}

export default App;
