import React,{useState} from "react";

function Component(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleName(event){
        setName(event.target.value);
    }

    function handleQuantity(event){
        setQuantity(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value);
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleName} />
            <p>Name : {name}</p>

            <input value={quantity} onChange={handleQuantity} type="number"/>
            <p>Quantity : {quantity}</p>

            <textarea value={comment} onChange={handleComment} placeholder="Enter delivery instructions" />
            <p>Comments : {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="" >Select an option</option>
                <option value={"Visa"}>Visa</option>
                <option value={"Mastercard"}>Mastercard</option>
                <option value={"Paypal"}>Paypal</option>
            </select>
            <p>Payment method : {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"} onChange={handleShipping} />
                Pick Up
            </label><br></br>

            <label>
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"} onChange={handleShipping} />
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
    );

}
export default Component;