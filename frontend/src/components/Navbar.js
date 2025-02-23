import React, { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

 
class NavBar extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">

        <Navbar.Brand href="localhost:3000"> Modum - your aid in decision making.  </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="localhost:3000">Home</Nav.Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
 
export default NavBar;