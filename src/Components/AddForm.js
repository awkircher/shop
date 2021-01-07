const AddForm = function(props) {
    function handleSubmit(event) {
        event.preventDefault();
        // Pull all the data off the event
        const elem = event.target;
        const productId = elem.dataset.id;
        const productName = elem.dataset.name;
        const productPrice = elem.dataset.price;
        const productImg = elem.dataset.img;
        const quantity = Number(elem[0].value);
        // Pass arguments back to CartData addToCart method. UID will be calculated there.
        props.addToCart(productId, productName, productPrice, productImg, quantity);
    }
    return (
        <div className="AddForm">
            <form data-id={props.id} data-name={props.name} data-price={props.price} data-img={props.img} onSubmit={handleSubmit}>
                <input type="number"></input>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    );
}

export default AddForm;