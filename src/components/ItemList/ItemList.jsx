import Item from '../Item/Item';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { showError } from '../../utils/ShowToast';


function ItemList({ ShoppingItems, addQuantity, decQuantity }){
    return (
        <div className="shopping-items-wrapper">
            {
                ShoppingItems && ShoppingItems.map((item) => {
                    return (
                        <div key={item.id} className='item-list'>
                            <div 
                                className='change-quantity add-item'
                                onClick={() => addQuantity(item.id)}
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
                                    decQuantity(item.id)
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
