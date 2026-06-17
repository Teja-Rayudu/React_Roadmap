import React, { useState } from "react";

function ComponentC() {
  const [cars, setCars] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState("");
  const [carModel, setModel] = useState("");

  function handleAddCar() {
    const newCar = {year:carYear, make:carMake, model:carModel};

    setCars(c => [...c, newCar]);

    setMake("");
    setModel("");
    setYear(new Date().getFullYear());

    
  }

  function handleCarYear(event) {
    setYear(event.target.value);
  }

  function handleCarModel(event) {
    setModel(event.target.value)
  }

  function handleCarMake(event) {
    setMake(event.target.value)
  }

  function handleRemoveCar(index) {
    setCars(cars.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h3>List of car objects</h3>
      <ul>
        {cars.map((car, index) => 
        <li key={index} onClick={() => handleRemoveCar(index)}>
          {car.year} {car.make} {car.model}
        </li>)}
      </ul>
      <input type="number" value={carYear} onChange={handleCarYear}></input>
      <input type="text" placeholder="Enter car make"
      onChange={handleCarMake}></input>
      <input type="text" placeholder="Enter car model"
      onChange={handleCarModel}></input><br></br>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default ComponentC;
