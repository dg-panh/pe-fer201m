import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "bootstrap";
import { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar expand="md">
                    <div className="container">
                        <NavbarBrand href="/" ><img src="assets/images/logo.png" alt="Logo" width="50%" /> </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem navbar onClick={() => alert("This function is building")}>
                                <span className="fa fa-shopping-cart fa-lg"></span>
                            </NavItem>
                        </Nav>

                    </div>
                </Navbar>
                <hr />
            </>
        )
    }
}

export default Header;