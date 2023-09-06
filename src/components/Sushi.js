import React, { useState } from "react";

function Sushi({sushi, onEaten}) {
  const { id, name, img_url, price, eaten } = sushi;

  const handleEaten = () => {
    if(!eaten){
      onEaten(sushi);
    }else{
      alert("Nothing left!")
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <div>
            <img
              src={img_url}
              alt={name}
              width="100%"
            />
          </div>
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
