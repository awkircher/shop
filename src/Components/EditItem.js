const EditItem = function(props) {
    function handleChange(event) {
        const elem = event.target;
        props.editItem(elem.value, props.uid);
    }
    return (
        <div className="EditItem">
            <input type="number" value={props.value} onChange={handleChange}></input>
        </div>
    );
}

export default EditItem;