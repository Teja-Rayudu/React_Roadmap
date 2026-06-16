import React,{useState} from "react";

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function handleColor(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-container">
            <h1>Color Picker</h1>
            <div className="color-display"
            style={{backgroundColor : color}}>
                Selected Color : {color}
            </div>
            <p>Select a Color : </p>
            <input type="color" value={color} onChange={handleColor}/>
        </div>
    );
}

export default ColorPicker;