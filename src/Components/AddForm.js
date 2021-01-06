const AddForm = function(props) {
    return (
        <div className="AddForm">
            <form data-id={props.id} data-name={props.name} data-price={props.price} data-img={props.img} onSubmit={props.addToCart}>
                <input type="number"></input>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    );
}

export default AddForm;