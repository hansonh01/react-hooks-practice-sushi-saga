import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEaten }) {
  const [amountOfSushis, setAmountOfSushis] = useState(0);

  const displaySushi = sushis.slice(amountOfSushis, amountOfSushis +4);

  const handleMore = () => {
    setAmountOfSushis((amountOfSushis)=> (amountOfSushis + 4) % sushis.length);
  };

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {displaySushi.map((sushi)=>(
        <Sushi
        key={sushi.id}
        sushi={sushi}
        onEaten={onEaten}
        />
      ))}
      <MoreButton onClickMore={handleMore} />
    </div>
  );
}

export default SushiContainer;
