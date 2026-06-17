import React, { useState } from "react";

function ComponentB() {
  const [foods, setFood] = useState(["apple", "banana", "Custard apple"]);

  function handleAddFood() {
    const foodItem = document.getElementById("food-input").value;
    document.getElementById("food-input").value = "";

    setFood(f => [...f,foodItem]);
  }

  function handleRemoveFood(index) {
    setFood(foods.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h3>Food Items</h3>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
        ))}
      </ul>
      <input id="food-input"></input>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default ComponentB;
