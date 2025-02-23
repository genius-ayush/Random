
// import { RecoilRoot } from 'recoil'
import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
// import Header from './components/Header'

//@ts-ignore
// const useIncreaseCount = ()=>{
//   const [count , setCount]  = useState(0) ; 
//   function increaseCount(){
//     setCount(count + 1) ;
//   }

//   function decreaseCount(){
//     setCount(count-1) ; 
//   }
   
//   return {count : count , increaseCount: increaseCount , decreaseCount : decreaseCount} ; 
// }

function App() {
  const [id , setId] = useState(1); 
  const {post , loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + id) ; 

  if(loading){
    return <div className='bg-slate-800 h-screen w-full text-white'>loading</div>
  }
  // const [counter , setCounter ] = useState(0) ; 
  // const {count , increaseCount , decreaseCount} = useIncreaseCount() ; 
  // const increaseCount = ()=>{
  //   setCounter(counter+1) ; 
  // }

  
  return (
    
    <div className='bg-slate-800 text-white h-screen w-full'>
      <div className='flex gap-2'>
        <button className='px-4 py-2 bg-blue-300 rounded-md' onClick={()=>setId(1)}>post1</button>
        <button className='px-4 py-2 bg-blue-300 rounded-md' onClick={()=>setId(2)}>post2</button>
        <button className='px-4 py-2 bg-blue-300 rounded-md' onClick={()=>setId(3)}>post3</button>
      </div>
      <div className='mt-10 p-2'>
      {JSON.stringify(post)}
      </div>
    </div>
  )
}

export default App
