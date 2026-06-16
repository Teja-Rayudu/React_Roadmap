import React,{useState} from "react"

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isStudent, setStatus] = useState();

    const updateName = () => {
        setName("Teja");
    }

    const incrementAge = () =>{
        setAge(age + 1);
    }

    const toggleStudentStatus = () =>{
        setStatus(!isStudent);
    }

    return(
        <div>
            <p>Name :{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age :{age}</p>
            <button onClick={incrementAge}>Increment age</button>

            <p>Is Student ? :{isStudent ? "Yes" : "No" }</p>
            <button onClick={toggleStudentStatus}>Toggle status</button>
        </div>
    );
}

export default MyComponent