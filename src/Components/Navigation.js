import { NavLink } from 'react-router-dom'
import CartModal from './CartModal'
import { useState } from "react";

const Navigation = function() {
    const [visibility, setVisibility] = useState(false)
    
    const handleMouse = function(isVisible) {
       setVisibility(isVisible);
    }

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
                <NavLink to="/cart" activeClassName="selected" onMouseOver={() => handleMouse(true)} onMouseLeave={() => handleMouse(false)}>Cart</NavLink>
                <CartModal 
                visibility={visibility}/>
            </nav>
        </div>
    );
}

export default Navigation;