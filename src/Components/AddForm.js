import { useState } from 'react'

const AddForm = function(props) {
    // Allow for a default value of "1" while keeping this a controlled component.
    const [value, setValue] = useState("1");
    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Pull all the data off the event.
        const elem = event.target;
        const productId = elem.dataset.id;
        const productName = elem.dataset.name;
        const productPrice = elem.dataset.price;
        const productImg = elem.dataset.img;
        const quantity = Number(elem[0].value);
        // Pass arguments back to CartData addToCart method. UID will be calculated there.
        props.addToCart(productId, productName, productPrice, productImg, quantity);
        props.changeModalVisibility(true);
    }

    return (
        <div className="AddForm">
            <form data-id={props.id} data-name={props.name} data-price={props.price} data-img={props.img} onSubmit={handleSubmit}>
                <input type="number" value={value} onChange={handleChange}></input>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    );
}

export default AddForm;