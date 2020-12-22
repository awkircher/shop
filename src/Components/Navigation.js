import { NavLink } from 'react-router-dom'

const Navigation = function() {
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
                <NavLink to="/cart" activeClassName="selected">Cart</NavLink>
            </nav>
        </div>
    );
}

export default Navigation;