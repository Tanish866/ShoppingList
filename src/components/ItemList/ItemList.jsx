import Item from '../Item/Item';
import './ItemList.css';

function ItemList({ ShoppingItems }){
    return (
        <div className="shopping-items-wrapper">
            {
                ShoppingItems && ShoppingItems.map((item) => {
                    return (
                        <Item
                            itemName={item.name}
                            key={item.id}
                            quantity={item.quantity}
                        />
                    )
                })
            }
        </div>
    )
}
export default ItemList;
