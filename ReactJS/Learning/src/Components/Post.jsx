import React from 'react'

function Post({name , followers , post , dp , time}){
    return (
      <div  style={{borderRadius:10 , borderWidth:2 , width: 300, height: 150 , boxShadow:300 , padding:10 , background: "white",}}>
        <div style={{display:"flex"}}>
          <div style={{marginRight:'10px'}}>
            <img
              src={dp}
              alt=""
              srcset=""
              style={{ borderRadius: 100, width: 50, height: 50 }}
            />
          </div>
          <div>
            <div style={{fontWeight: "bold"}}>{name}</div>  
            <div style={{fontWeight:"200"}}>followers {followers}</div>
            <div style={{fontWeight:"100"}}>{time} </div>
          </div>
        </div>      
        <div style={{fontWeight:"500"}}>{post}</div>
      </div>
    );
  }

export default Post