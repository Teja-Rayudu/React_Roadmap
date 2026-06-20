import React,{useState, createContext} from "react";
import ComponentX from "./ComponentX.jsx";

export const UserContext = createContext();

function ComponentW(){

    const [user, setName] = useState("Teja");
    return(
        <div className="box">
            <h1>ComponentW</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
            <ComponentX user = {user}/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentW;