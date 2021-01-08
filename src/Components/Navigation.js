import { NavLink } from 'react-router-dom'
import CartModal from './CartModal'

const Navigation = function(props) {
    const totalQuantity = props.totalQuantity();
    return (
        <div className="Navigation">
            <nav>
                <div className="navTop">
                    <a id="logo" href="./">Cream City Coffee Roasters</a> {/* will be a logo img */}
                    <NavLink className="NavLink" to="/cart" activeClassName="selected" onMouseOver={() => props.changeModalVisibility(true)}>Cart ({totalQuantity})</NavLink>
                    <CartModal 
                        cartContents={props.cartContents}
                        totalQuantity={props.totalQuantity}
                        modalVisibility={props.modalVisibility}
                        changeModalVisibility={props.changeModalVisibility}
                        itemAdded={props.itemAdded}
                    />
                </div>
                <div className="navSide">
                    <NavLink className="NavLink" to="/shop" activeClassName="selected">Shop</NavLink>
                    <NavLink className="NavLink" to="/locations" activeClassName="selected">Locations</NavLink>
                    <NavLink className="NavLink" to="/" activeClassName="selected">Home</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;