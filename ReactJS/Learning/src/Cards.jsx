import React from "react";

function Cards(props) {
    console.log()
  return (
    
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.object.title}</div>
          <p className="text-gray-700 text-base">
            {props.object.content}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
