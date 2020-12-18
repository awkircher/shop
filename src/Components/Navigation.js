import NavItem from './NavItem'

const Navigation = function() {
    const current = window.location.pathname;
    return (
        <div className="Navigation">
            <nav>
                <li>
                    <a href="./">Good Lands Coffee Roasters</a>
                </li>
                <NavItem path="./shop" title="Shop" current={current} />
                <NavItem path="./locations" title="Locations" current={current}/>
                <NavItem path="./cart" title="Cart" current={current}/>
            </nav>
        </div>
    );
}

export default Navigation;