import Header from "../Header/Header";
import './ShoppingList.css';
import InputItem from "../InputItem/InputItem";

function ShoppingList(){
    return (
        <>
            <Header/>

            <div className="current-shopping-list">
                <InputItem/>
            </div>
            
        </>
    )
}
export default ShoppingList;
