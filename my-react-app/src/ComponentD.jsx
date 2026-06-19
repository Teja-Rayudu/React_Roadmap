import React, { useState, useEffect } from "react";

function ComponentD() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleAdd() {
    setCount((c) => c + 1);
  }

  function handleSubtract() {
    setCount((c) => c - 1);
  }

  function handleColor() {
    setColor(color === "green" ? "red" : "green")
  }

  useEffect(() => {
    document.title = `count : ${count} ${color}`;
  }, [color, count]);

  useEffect(() =>{
    window.addEventListener("resize", handleResize);console.log("EVENT LISTENER ADDED");

    return () =>{
        window.removeEventListener("resize", handleResize);
        console.log("Event Listener removed");
    }
    },[]);

    useEffect(() =>{
        document.title = `Size : ${width} x ${height}`;
    });

  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Width : {width}px </p>
      <p>Height : {height}px </p>
    </>
  );
}

export default ComponentD;
