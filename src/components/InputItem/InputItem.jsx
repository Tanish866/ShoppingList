import { showError, showSuccess } from '../../utils/ShowToast';
import "react-toastify/dist/ReactToastify.css";
import './InputItem.css';

function InputItem(){
    return (
        <div className="input-wrapper">
            <input
                className="item-input"
                type="text"
                placeholder="Add item..."
            />
            <button className="add-item-button"
                onClick={() => showSuccess("Successfully added item")}
            >
                Add
            </button>
        </div>
    )
}
export default InputItem;