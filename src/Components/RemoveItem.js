const RemoveItem = function(props) {
    function handleClick() {
        props.removeItem(props.uid)
    }
    return (
        <div className="RemoveItem">
            <button onClick={handleClick}>Remove from Cart</button>
        </div>
    );
}

export default RemoveItem;