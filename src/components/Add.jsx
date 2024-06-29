import { useState } from "react";

function Add ({handleAddData}) {
    // Create state when product name changes, default is empty
    const [product,setProduct] = useState("");
    // Create state when pquantity is selected, default is 1
    const [quantity,setQuantity] = useState(1);
    // Actions when submit form or press Enter 
    const submitData = (e) => {
        e.preventDefault();
        // If a product is written, create new item based on values in Form 
        if(product) {
        const newItem = {id: Date.now(), name: product, quantity, completed: false};
        // Send data to state to update shopping list
        handleAddData(newItem);
        // Reset default values
        setProduct("");
        setQuantity(1);
        };
    }

    return (
        <form onSubmit={submitData}>
            <div className="addWrapper">
                <label for="quantity">Select quantity: </label>
                <select id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {[...Array(20)].map((_,index) => (
                        <option value={index+1} key={index+1}>{index+1}</option>
                    ))}
                </select>
                <input 
                value={product} onChange={(e) => setProduct(e.target.value)}/>
                <button type="submit">Add</button>
            </div>
        </form>
    )
};

export default Add;