import Navigation from '../Components/Navigation'
import '../App.css';

const Locations = function(props) {
    return (
        <div className="Locations">
            <Navigation 
                cartContents={props.cartContents}
                totalQuantity={props.totalQuantity}
                changeModalVisibility={props.changeModalVisibility}
                modalVisibility={props.modalVisibility}/>
            Locations
        </div>
    );
}

export default Locations;