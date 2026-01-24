import Item from '../Item/Item';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';

function ItemList({ ShoppingItems }){
    return (
        <div className="shopping-items-wrapper">
            {
                ShoppingItems && ShoppingItems.map((item) => {
                    return (
                        <div key={item.id} className='item-list'>
                            <div className='change-quantity add-item'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <Item
                                itemName={item.name}
                                
                                quantity={item.quantity}
                            />
                            <div className='change-quantity remove-item'>
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}
export default ItemList;
