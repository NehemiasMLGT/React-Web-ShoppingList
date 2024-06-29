const List = ({shoppingList,deleteItem,completeItem}) => {
    // Retrieve value of Completed field
    const completed = (shoppingList.completed);
    // Set initial value of Class
    let classCompleted = "";
    // If retrieved Completed field is true, class will be settled to line through text
    if (completed) classCompleted = "classCompleted";
    return (
        <tr>
            <td className={classCompleted}>{shoppingList.name}</td>
            <td className={classCompleted}>{shoppingList.quantity}</td>
            <td className="buttonsCell"><button onClick={()=>completeItem(shoppingList.id)} hidden={shoppingList.completed}>Check</button>
            <button onClick={()=>deleteItem(shoppingList.id)} className="buttonDelete">Delete</button></td>
        </tr>
    )
};

export default List;