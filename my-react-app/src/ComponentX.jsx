import ComponentY from "./ComponentY.jsx";

function ComponentX(){
    return(
        <div className="box">
            <h1>ComponentX</h1>
            <ComponentY />
        </div>
    );
}

export default ComponentX;