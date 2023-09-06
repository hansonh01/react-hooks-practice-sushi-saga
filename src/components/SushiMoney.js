import React, { useState } from 'react'

function SushiMoney({onAddMoreMoney}) {
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMoreMoney(amount);
    setAmount(0);
  };

  const handleChange = (e) => {
    const amount = parseInt(e.target.value,10);
    setAmount(amount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={handleChange} />
      <button type="submit">Add $ to Budget</button>
    </form>
  )
}

export default SushiMoney