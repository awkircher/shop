import Navigation from '../Components/Navigation'

const Locations = function(props) {
    return (
        <div className="Locations">
            <Navigation 
                cartContents={props.cartContents}
                changeModalVisibility={props.changeModalVisibility}
                modalVisibility={props.modalVisibility}/>
            Locations
        </div>
    );
}

export default Locations;