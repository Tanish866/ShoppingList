import './InputItem.css';

function InputItem(){
    return (
        <div className="input-wrapper">
            <input
                className="item-input"
                type="text"
                placeholder="Add item..."
            />
            <button className="add-item-button">
                Add
            </button>
        </div>
    )
}
export default InputItem;