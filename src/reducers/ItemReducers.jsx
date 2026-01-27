import { v4 as uuid } from 'uuid';

function ItemReducers(shoppingItems, action){  // action -> {type: 'add_item'}
    if(action.type == 'add_item'){
        return[
            ...shoppingItems,
            {id: uuid(), name: action.itemName, quantity: 1}
        ];
    }
    else if(action.type == 'increment_item'){
        const newShoppingItems = shoppingItems.map((item) =>{
            if(action.itemId == item.id) item.quantity++;
            return item;
        })
        return newShoppingItems;
    }
    else if(action.type == 'decrement_item'){
        let newShoppingItems = shoppingItems.map((item) =>{
            if(action.itemId == item.id) item.quantity--;
            return item;
        })
        return newShoppingItems.filter(item => item.quantity > 0);
    }
}
export default ItemReducers;
