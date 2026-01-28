import { showError, showSuccess } from '../../utils/ShowToast';
import "react-toastify/dist/ReactToastify.css";
import './InputItem.css';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { ShoppingDispatchContext } from '../../context/ShoppingContext';

function InputItem(){

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

    const dispatch = useContext(ShoppingDispatchContext);

    const handleFormSubmission = (data) => {
        // addItem(data.item);
        dispatch({
            type: 'add_item',
            itemName: data.item
        });
        showSuccess("Successfully added item");
    }

    return (
        <div className="input-wrapper">
            <form onSubmit={handleSubmit(handleFormSubmission)}>
                <input
                    className="item-input"
                    type="text"
                    placeholder="Add item..."
                    name='item'
                    {...register("item", { required: true, minLength: 3})}
                />
                <button className="add-item-button">
                    Add
                </button>
            </form>
            <div>
                {errors.item && errors.item.type == 'required' && <p>Item is missing</p>}
                {errors.item && errors.item.type == 'minLength' && <p>Item name cannot be less than 3</p>}
            </div>
        </div>
    )
}
export default InputItem;