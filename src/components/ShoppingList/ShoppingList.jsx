import Header from "../Header/Header";
import './ShoppingList.css';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from 'react-toastify';
import { useReducer } from "react";
import ItemReducers from "../../reducers/ItemReducers";


function ShoppingList(){

    const [shoppingItems, dispatch] = useReducer(ItemReducers, []);

    function handleAddItem(name){
        dispatch({
            type: 'add_item',
            itemName: name
        });
    }

    function handleAddQuantity(id){
        dispatch({
            type: 'increment_item',
            itemId: id
        })
    }
    function handleDecQuantity(id){
        dispatch({
            type: 'decrement_item',
            itemId: id
        })
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
