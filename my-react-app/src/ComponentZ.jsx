import React,{useContext} from "react";
import { UserContext } from "./ComponentW.jsx";



function ComponentZ(){
    const user = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentZ</h1>
            <h2>{`Bye ! ${user}`}</h2>
        </div>
    );
}

export default ComponentZ;