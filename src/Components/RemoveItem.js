import '../App.css'

const RemoveItem = function(props) {
    function handleClick() {
        props.removeItem(props.uid)
    }
    return (
        <div className="RemoveItem">
            <button onClick={handleClick}></button>
        </div>
    );
}

export default RemoveItem;