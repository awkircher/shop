import Navigation from '../Components/Navigation'

const Locations = function(props) {
    return (
        <div className="Locations">
            <Navigation cartContents={props.cartContents}/>
            Locations
        </div>
    );
}

export default Locations;