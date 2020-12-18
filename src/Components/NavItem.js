const NavItem = function(props) {
    const pattern = /[^.]*$/;
    if (`${props.current}` === `${props.path.match(pattern)}`) {
        return (
            <div className="NavItem">
                <li>
                    <a href={props.path} className={"active"}>{props.title}</a>
                </li>
            </div>
        )
    } else {
        return (
            <div className="NavItem">
                <li>
                    <a href={props.path} className={"inactive"}>{props.title}</a>
                </li>
            </div>
        )
    }
}

export default NavItem;