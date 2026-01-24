import Header from "../Header/Header";
import './ShoppingList.css';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from 'react-toastify';

const shoppingItems = [
    {id: 1, name: 'Apple', quantity: 2},
    {id: 2, name: 'Mango', quantity: 1}
]

function ShoppingList(){
    return (
        <>
            <Header/>
            <ToastContainer/>
            <div className="current-shopping-list">
                <InputItem/>
                <ItemList
                    ShoppingItems={shoppingItems}
                />
            </div>
            
        </>
    )
}
export default ShoppingList;
