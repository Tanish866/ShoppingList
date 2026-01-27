import { showError, showSuccess } from '../../utils/ShowToast';
import "react-toastify/dist/ReactToastify.css";
import './InputItem.css';
import { useState } from 'react';

function InputItem({addItem}){

    const [itemName, setItemName] = useState("");

    return (
        <div className="input-wrapper">
            <input
                className="item-input"
                type="text"
                placeholder="Add item..."
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <button className="add-item-button"
                onClick={() => {
                    addItem(itemName);
                    setItemName('');
                    showSuccess("Successfully added item")
                }}
            >
                Add
            </button>
        </div>
    )
}
export default InputItem;