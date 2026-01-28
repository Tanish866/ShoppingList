import Item from '../Item/Item';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { showError } from '../../utils/ShowToast';
import { ShoppingDispatchContext, ShoppingItemContext } from '../../context/ShoppingContext';


function ItemList(){

    const ShoppingItems = useContext(ShoppingItemContext);
    const dispatch = useContext(ShoppingDispatchContext);

    return (
        <div className="shopping-items-wrapper">
            {
                ShoppingItems && ShoppingItems.map((item) => {
                    return (
                        <div key={item.id} className='item-list'>
                            <div
                                className='change-quantity add-item'
                                onClick={() => dispatch({type: 'increment_item', itemId: item.id})}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <Item
                                itemName={item.name}
                                quantity={item.quantity}
                            />
                            <div 
                                className='change-quantity remove-item'
                                onClick={() => {
                                    if(item.quantity == 1) showError(`${item.name} remove from the list`)
                                    dispatch({type: 'decrement_item', itemId: item.id})
                                }}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}               
export default React.memo(ItemList);
