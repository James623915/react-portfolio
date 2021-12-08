import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import { 
    Link, 
    useHistory,
BrowerRouter as Router,
Switch,
Route,
 
} from 'react-router-dom';
import { ProvideAuth } from './useAuth.js';
import About from './About'

// create and Authentication route
function Navi() {
    let history = useHistory();

    return (
    <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to='/'>James' Portfolio</NavbarBrand>
        <Collapse isOpen={true} navbar>
        <Nav className='mr-auto' navbar>
            <NavItem>
                <NavLink tag={Link} to='/'>Home</NavLink>
            </NavItem>
        <NavItem>
            <NavLink tag={Link} to='/search-gifs'>Search</NavLink>
        </NavItem>
        <NavItem>
        <NavLink tag={Link} to='/about'>
            About
        </NavLink>
        </NavItem>
        {/* If I am not signed in Login Link */}
        {/* If I am logged in Signout Link */}


        {/* Create a link to view saved gifs */}
        {/* Create a link to have hour users sign in or sign out */}
        
            </Nav>
        </Collapse>
    </Navbar>
    )
}

export default Navi;