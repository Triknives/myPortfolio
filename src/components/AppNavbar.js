import React, {Component} from 'react';
import{
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false,
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return(
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5" id="nav-list">
        <Container>
          <NavbarBrand href="/">Brett Cordell</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className= "ml-auto" navbar>
            <NavItem className = "nav-list">
            <NavLink href = "https://www.linkedin.com/in/brett-cordell-50275250/">About Me</NavLink>
            </NavItem>
              <NavItem className = "nav-list">
                <NavLink href = "https://github.com/triknives">GitHub</NavLink>
                </NavItem>
                <NavItem className = "nav-list">
                <NavLink href = "https://www.linkedin.com/in/brett-cordell-50275250/">LinkedIn</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
    </Navbar>
  </div>
  );
}
}


export default AppNavbar;
