import Navigation from '../Components/Navigation'

const Locations = function(props) {
    return (
        <div className="Locations">
            <Navigation 
                cartContents={props.cartContents}
                changeVisibility={props.changeVisibility}
                visibility={props.visibility}/>
            Locations
        </div>
    );
}

export default Locations;