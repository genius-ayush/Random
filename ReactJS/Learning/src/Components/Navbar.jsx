import React, { useState } from 'react'

function Navbar() {

  const [currentTab , setCurrentTab] = useState("Feed") ; 
  return (
    <div className='flex justify-between p-2'>
        <button className='border px-2 py-1 rounded-md border-black' style
         ={{color:currentTab == 'Feed' ? "red" : "Black"}} onClick={()=>{setCurrentTab("Feed")}}>Feed</button>
        <button className='border px-2 py-1 rounded-md border-black' style={{color: currentTab == "Messages" ? "red" : "black"}} onClick={()=>{setCurrentTab("Messages")}}>Messages</button>
        <button className='border px-2 py-1 rounded-md border-black' style={{color: currentTab == "Notification" ? "red" : "black"}} onClick={()=>{setCurrentTab("Notification")}}>Notification</button>
        <button className={`border px-2 py-1 rounded-md border-black ${currentTab == 'Jobs' ? 'text-red-500' : 'text-black'}`}onClick={()=>{setCurrentTab("Jobs")}}>Jobs</button>
    </div>
  )
}

export default Navbar