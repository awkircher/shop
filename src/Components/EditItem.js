import AddOne from './AddOne'
import MinusOne from './MinusOne'

const EditItem = function(props) {
    function handleChange(event) {
        const elem = event.target;
        props.editItem(elem.value, props.uid);
    }

    function addOne(event) {
        event.preventDefault();
        const value = props.value + 1;
        props.editItem(value, props.uid);
    }

    function minusOne(event) {
        event.preventDefault();
        const value = props.value - 1;
        props.editItem(value, props.uid);
    }

    return (
        <div className="EditItem">
            <AddOne 
                handleClick={addOne} />
            <input value={props.value} onChange={handleChange}></input>
            <MinusOne 
                handleClick={minusOne} />
        </div>
    );
}

export default EditItem;