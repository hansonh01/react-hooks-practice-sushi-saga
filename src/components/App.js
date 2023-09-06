import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushies] = useState([]);
  const [money, setMoney]=useState(200);

  useEffect(()=>{
    fetch(API)
      .then(r=>r.json())
      .then(data=>setSushies(data))
  },[])

  const handleEaten = (isEaten) => {
    if(money >= isEaten.price){
      const updateSushis = sushis.map((sushi)=>{
        if(sushi.id === isEaten.id){
          return {...sushi, eaten:true};
        }
        return sushi;
      })
      setSushies(updateSushis);
      setMoney((wallet)=> wallet - isEaten.price);
    }else{
      alert("Need more 💸");
    }
  }

  const handleAddMoreMoney = (moreMoney) => {
    setMoney((money)=>money+moreMoney);
  };

  const eatenSushis = sushis.filter((sushi)=> sushi.eaten);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEaten={handleEaten}/>
      <Table money={money} onAddMoreMoney={handleAddMoreMoney} plates={eatenSushis}/>
    </div>
  );
}

export default App;
