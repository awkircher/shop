const AddButton = function(props) {
    return (
        <div className="AddButton">
            <button data-id={props.id} onClick={props.addToCart}>Add to Cart</button>
        </div>
    );
}

export default AddButton;