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
            <MinusOne 
                handleClick={minusOne} />
            <input value={props.value} onChange={handleChange}></input>
            <AddOne 
                handleClick={addOne} />
        </div>
    );
}

export default EditItem;