import Header from "../Header/Header";
import './ShoppingList.css';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from 'react-toastify';
import { useState } from "react";
import { v4 as uuid } from 'uuid';



function ShoppingList(){

    const [shoppingItems, setShoppingItems] = useState([]);

    function handleAddItem(itemName){
        setShoppingItems([
            ...shoppingItems, 
            {id: uuid(), name: itemName, quantity: 1}
        ]);
    }

    function handleAddQuantity(itemId){
        let newShoppingItem = shoppingItems.map(item => {
            if(item.id == itemId) item.quantity++;
            return item;
        });
        setShoppingItems(newShoppingItem);
    }
    function handleDecQuantity(itemId){
        let newShoppingItem = shoppingItems.map(item => {
            if(item.id == itemId) item.quantity--;
            return item;
        });
        newShoppingItem = newShoppingItem.filter(item => item.quantity > 0);
        setShoppingItems(newShoppingItem);
    }

    return (
        <>
            <Header/>
            <ToastContainer/>
            <div className="current-shopping-list">
                <InputItem
                    addItem={handleAddItem}
                />
                <ItemList
                    ShoppingItems={shoppingItems}
                    addQuantity={handleAddQuantity}
                    decQuantity={handleDecQuantity}
                />
            </div>
            
        </>
    )
}

export default ShoppingList;
