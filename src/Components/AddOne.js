const AddOne = function(props) {
    return (
        <div className="add">
            <button onClick={props.handleClick}>+</button>
        </div>
    );
}

export default AddOne;