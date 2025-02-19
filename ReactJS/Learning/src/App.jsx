import React, { useState } from "react";
import Post from "./Components/Post";
import Notification from "./Components/Notification";
import Greetings from "./Components/Greetings";
import Navbar from "./Components/Navbar";
import UseRef from "./Components/UseRef";
import Clock from "./Components/Clock";
import Bulb from "./Components/Bulb";
import Counter from "./Components/Counter";
import UseFetch from "./Components/UseFetch";
import Todo from "./Components/Todo";
import PostRender from "./Components/PostRender";
import Context from "./Components/Context";
import Relearn from "./Components/Relearn";
import IncreaseDecrease from "./Components/IncreaseDecrease";
import {
  RecoilRoot,
} from 'recoil';

function App() {

  return (
    <div className="">
      {/* <Todo/> */}
      {/* <UseFetch/> */}
      {/* <Counter/>  */}
      {/* <Bulb/> */}
      {/* <Clock/> */}
      {/* <UseRef/> */}
      {/* <Navbar/> */}
      {/* <Notification/> */}
      {/* <Greetings/> */}
      {/* <Post/> */}
      {/* <PostRender/> */}
      {/* <Context/> */}
      {/* <Relearn/> */}
      <RecoilRoot>
      <IncreaseDecrease/>
      </RecoilRoot>
    </div>
  )

  // const [posts , setPosts] = useState([]) ;

  

  // const render = posts.map(post => <Post
  //   name={post.name}
  //   followers={post.followers}
  //   post={post.post}
  //   dp={post.dp}
  //   time={post.time}
  // />)

  // function addPost(){
  //   setPosts([...posts , {
  //     name : "ayush" , 
  //     followers : "100"  , 
  //     post : "hey there i am ayush" , 
  //     dp : "https://picsum.photos/id/237/200/300" , 
  //     time : "10 min"
  //   }])
  // }

  // function deletePost(){
  //   setPosts(posts.slice(0, -1));
  // }
  // return (
  // <div className="bg-blue-50">
  //   <button className="ml-10 mt-10 rounded-md border-2 text-center px-2 py-2 bg-white" onClick={addPost}>Add post</button>
  //   <button className="ml-10 mt-10 rounded-md border-2 text-center px-2 py-2 bg-white" onClick={deletePost}>Delete post</button>
  //   <div className=" w-full h-screen flex justify-center pt-5">
  //     <div>  
  //     </div>
  //     <div>
  //       {render }
      
  //     </div>
  //   </div>

  //   </div>
  // );
}

export default App;
