import Navigation from '../Components/Navigation'
import '../App.css';
import map from '../images/map.png'

const Locations = function(props) {
    return (
        <div className="Locations">
            <Navigation 
                cartContents={props.cartContents}
                totalQuantity={props.totalQuantity}
                changeModalVisibility={props.changeModalVisibility}
                modalVisibility={props.modalVisibility}/>
            <div className="container">
                <img className="map" src={map} alt="map of Milwaukee locations"></img>
                <div className="detailsContainer">
                    <div className="locationDetails">
                        <h1 className="locationName">Third Ward</h1>
                        <p className="address">
                            123 Buffalo St.<br></br>
                            Milwaukee, WI 53221
                        </p>
                        <p className="hours">
                            <span className="header">Hours</span><br></br>
                            7a &ndash; 7p M&ndash;F<br></br>
                            9a &ndash; 9p Sat &amp; Sun
                        </p>
                    </div>
                    <div className="locationDetails">
                        <h1 className="locationName">Bayview</h1>
                        <p className="address">
                            123 S. Milwaukee Ave.<br></br>
                            Milwaukee, WI 53221
                        </p>
                        <p className="hours">
                            <span className="header">Hours</span><br></br>
                            7a &ndash; 9p Everyday
                        </p>
                    </div>
                    <div className="locationDetails">
                        <h1 className="locationName">Riverwest</h1>
                        <p className="address">
                            35 Locust St.<br></br>
                            Milwaukee, WI 53221
                        </p>
                        <p className="hours">
                            <span className="header">Hours</span><br></br>
                            7a &ndash; 7p M&ndash;F<br></br>
                            9a &ndash; 9p Sat &amp; Sun
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Locations;