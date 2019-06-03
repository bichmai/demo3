import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container, //Row, Col,
} from "reactstrap";
import Header from "../Header/Header";


class AuthNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };


  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggleCollapse = () => {
    let newState = {
      collapseOpen: !this.state.collapseOpen
    };
    if (!this.state.collapseOpen) {
      newState["color"] = "bg-white";
    } else {
      newState["color"] = "navbar-transparent";
    }
    this.setState(newState);
  };
  render() {
    return (
      <Navbar
        className={classnames("navbar-absolute fixed-top", this.state.color)}
        expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              <img className="imgbanner" alt="logo owifi dashboard" src={require('../../../src/assets/img/control/logo 1.png')} />

            </NavbarBrand>
          </div>
          {this.props.location.pathname === "/auth/advertise-first" ? <Header /> : ""}
        </Container>
      </Navbar>
    );
  }
}

export default AuthNavbar;