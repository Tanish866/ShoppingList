import Header from "../Header/Header";
import './ShoppingList.css';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from 'react-toastify';
import { useReducer } from "react";
import ItemReducers from "../../reducers/ItemReducers";
import { ShoppingItemContext, ShoppingDispatchContext } from "../../context/ShoppingContext";


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
            <ShoppingItemContext.Provider value={shoppingItems}>
                <ShoppingDispatchContext.Provider value={dispatch}>
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
                </ShoppingDispatchContext.Provider>
            </ShoppingItemContext.Provider>
        </>
    )
}

export default ShoppingList;
