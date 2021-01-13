import AddOne from './AddOne'
import MinusOne from './MinusOne'

const EditItem = function(props) {
    function handleChange(event) {
        const elem = event.target;
        const value = (elem.value >= 10) ? 10 : elem.value;
        props.editItem(value, props.uid);
    }

    function addOne(event) {
        event.preventDefault();
        const value = ((props.value + 1) >= 10) ? 10 : (props.value + 1);
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