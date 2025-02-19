import React, { useState } from 'react'
import Post from './Post'

function PostRender() {
    let [posts , setPosts] = useState([]) ;
    
    function addPost(){
        const newPost = {
            name : "ayush" , 
            followers : 1000 , 
            dp : "https://picsum.photos/id/237/200/300" , 
            post : "Best in the word" , 
            time : "10:10 am"
        }

        setPosts([...posts , newPost]) ; 
    }
  return (
    <div className='flex justify-center mt-10'>
        <div>
        
        <button className='border-b bg-blue-100 px-2 , py-4 rounded-lg mt-5' onClick={addPost}>Add Post</button>
        {
            posts.map((post)=>
                <Post name={post.name} followers={post.followers} post={post.post} time={post.time} dp={post.dp}/>
            )
        }
        </div>
    </div>
  )
}

export default PostRender