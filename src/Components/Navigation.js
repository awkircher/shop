import { NavLink } from 'react-router-dom'
import CartModal from './CartModal'
import logo from '../images/logo.svg'
import { useLocation } from 'react-router-dom'

const Navigation = function(props) {
    const totalQuantity = props.totalQuantity();

    // Disables hover-to-open the cart modal when on the cart homepage.
    const location = useLocation();
    const shouldHover = (location.pathname === '/cart') ? false : true;

    return (
        <div className="Navigation">
            <nav>
                <div className="navTop">
                    <a id="logo" href="./">
                        <img src={logo} alt='Cream City Coffee Roasters'></img>
                    </a> {/* will be a logo img */}
                    <NavLink className="NavLink" exact to="/cart" activeClassName="selected" onMouseOver={() => props.changeModalVisibility(shouldHover)}>Cart ({totalQuantity})</NavLink>
                    <CartModal 
                        cartContents={props.cartContents}
                        totalQuantity={props.totalQuantity}
                        modalVisibility={props.modalVisibility}
                        changeModalVisibility={props.changeModalVisibility}
                        itemAdded={props.itemAdded}
                    />
                </div>
                <div className="navSide">
                    <NavLink className="NavLink" exact to="/shop" activeClassName="selected">Shop</NavLink>
                    <NavLink className="NavLink" exact to="/locations" activeClassName="selected">Locations</NavLink>
                    <NavLink className="NavLink" exact to="/" activeClassName="selected">Home</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;