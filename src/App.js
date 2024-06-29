import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

// const shoppingList = [{id: 1, name: "Coffee", quantity: 5, completed: false}]
// App contains functions and values that will be used by child components
function App() {
  // Create state for shopping list with an empty array
  const [shoppingList, setshoppingList] = useState([]);
  // Create state to append new items to shopping list
  const handleAddData = (item) => {
    setshoppingList((items)=>[...shoppingList, item]);
  };
  // When deleting an item by ID, recreate shopping list excluding item met ID using a state to update displaed data 
  const deleteItem = (id) => {
    setshoppingList((shoppingList) => shoppingList.filter((shoppingList) => shoppingList.id !== id));
  };
  // When completing an item by ID, recreate shopping list updating completed field of item using a state to update displaed data 
 const completeItem = (id) => {
    setshoppingList((shoppingList) => shoppingList.map((shoppingList) => 
      shoppingList.id === id ? {...shoppingList, completed: !shoppingList.completed} : shoppingList));
  };
  // Total element in shopping list
  const totalItems = Object.keys(shoppingList).length;
  // Total uncompleted elements in shopping list
  const pendingItems = Object.keys(shoppingList.filter((shoppingList) => !shoppingList.completed)).length;
  // Total completed elements in shopping list
  const completedItems = Object.keys(shoppingList.filter((shoppingList) => shoppingList.completed)).length;
  // Create HTML and send props and functions for each component
  return (
    <div className="appWrapper">
     <Header />
     <Main shoppingList={shoppingList} 
     handleAddData={handleAddData} 
     deleteItem={deleteItem}
     completeItem={completeItem} />
     <Footer totalItems={totalItems} pendingItems={pendingItems} completedItems={completedItems} />
    </div>
  );
};

export default App;
