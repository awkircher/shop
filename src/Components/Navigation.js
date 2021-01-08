import { NavLink } from 'react-router-dom'
import CartModal from './CartModal'

const Navigation = function(props) {
    return (
        <div className="Navigation">
            <nav>
                <li>
                    <a href="./">Good Lands Coffee Roasters</a>
                </li>
                <NavLink to="/shop" activeClassName="selected">
                    Shop
                </NavLink>
                <NavLink to="/locations" activeClassName="selected">Locations</NavLink>
                <NavLink to="/cart" activeClassName="selected" onMouseOver={() => props.changeVisibility(true)} onMouseLeave={() => props.changeVisibility(false)}>Cart</NavLink>
                <CartModal 
                    cartContents={props.cartContents}
                    visibility={props.visibility}
                    //changeVisibility={props.changeVisibility}
                    itemAdded={props.itemAdded}
                />
            </nav>
        </div>
    );
}

export default Navigation;