import { useState } from "react";
import Add from "./Add";
import List from "./List";

const Main = ({shoppingList,handleAddData,deleteItem,completeItem}) => {
    // Create state for sorting actions
    const [sortBy, setSortBy] = useState("byId");
    // Create a duplicate shopping list to avoid changes in the original list
    let sortedItems;
    // If sort by ID, use the original shopping list
    if(sortBy==="byId") {
        sortedItems = shoppingList;
    }
    // If sort by name, sort using a function for strings
    if(sortBy==="byName") {
        sortedItems = shoppingList.slice().sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
    }
    // If sort by quantity or status, do a normal sort
    if(sortBy==="byQuantity") {
        sortedItems = shoppingList.toSorted((a, b) => a.quantity - b.quantity);
    }
    if(sortBy==="byStatus") {
        sortedItems = shoppingList.toSorted((a, b) => a.completed - b.completed);
    }
    var noItems = "No items to show, add one.";
    if (Object.keys(shoppingList).length > 0)  noItems = "";
    return (
        <div className="mainWrapper">
            <Add handleAddData={handleAddData}/>
            <div className="listWrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {sortedItems.map((shoppingList)=><List key={shoppingList.id} 
                        shoppingList={shoppingList} 
                        deleteItem={deleteItem} 
                        completeItem={completeItem} />)}
                        {noItems}
                    </tbody>
                </table>
                <div className="sortWrapper">Sort items: 
                        <select className="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="byId">By ID</option>
                            <option value="byName">By Name</option>
                            <option value="byQuantity">By Quantity</option>
                            <option value="byStatus">By Status</option>
                        </select>
                    </div>
            </div>
        </div>
    )
};

export default Main;