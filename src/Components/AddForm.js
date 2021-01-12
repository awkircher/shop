import { useState } from 'react'
import AddOne from './AddOne'
import MinusOne from './MinusOne';

const AddForm = function(props) {
    // Allow for a default value of "1" while keeping this a controlled component.
    const defaultQuantity = "1";
    const [value, setValue] = useState(defaultQuantity);
    function handleChange(value) {
        if (Number(value) > 0 && Number(value) < 11) {
            setValue(value);
        } else if (Number(value) > 10) {
            setValue("10")
        }
        else {
            setValue("0")
        }
    }

    function addOne(event) {
        event.preventDefault();
        const increasedValue = Number(value) + 1;
        handleChange(increasedValue);
    }

    function minusOne(event) {
        event.preventDefault();
        const decreasedValue = Number(value) - 1;
        handleChange(decreasedValue);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Pull all the data off the event.
        const elem = event.target;
        const productId = elem.dataset.id;
        const productName = elem.dataset.name;
        const productPrice = elem.dataset.price;
        const productImg = elem.dataset.img;
        const quantity = Number(elem[1].value);
        // Pass arguments back to CartData addToCart method. UID will be calculated there.
        props.addToCart(productId, productName, productPrice, productImg, quantity);
        props.changeModalVisibility(true);
        setValue(defaultQuantity);
    }

    return (
        <div className="AddForm">
            <form data-id={props.id} data-name={props.name} data-price={props.price} data-img={props.img} onSubmit={handleSubmit}>
                <MinusOne handleClick={minusOne} />
                <input value={value} onChange={(event) => {
                    const value = event.target.value;
                    handleChange(value);
                }}></input>
                <AddOne handleClick={addOne} />
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    );
}

export default AddForm;