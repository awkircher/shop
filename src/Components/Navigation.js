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
                <NavLink to="/cart" activeClassName="selected" onMouseOver={() => props.changeModalVisibility(true)}>Cart</NavLink>
                <CartModal 
                    cartContents={props.cartContents}
                    modalVisibility={props.modalVisibility}
                    changeModalVisibility={props.changeModalVisibility}
                    itemAdded={props.itemAdded}
                />
            </nav>
        </div>
    );
}

export default Navigation;