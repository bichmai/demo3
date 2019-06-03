/*eslint-disable*/
import React from "react";
import { Container, Row, Button, } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';

class Header extends React.Component {
  //đăng nhập
  login = () => {
    this.props.history.push('/auth/Logins');

  };
  //đăng kí
  register = () => {
    this.props.history.push('/auth/register');
  };
  render() {
    return (
      <header
        className={"header" + (this.props.default ? " header-default" : "")}>
        <Container fluid={this.props.fluid ? true : false}>
          <Row className="text-right">
            <nav className="header-nav">
              {/* <Link to="/auth/Logins">
                <Button color="primary" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/auth/register" >
                <Button color="primary" size="sm">
                  Register
                </Button>
              </Link> */}

            </nav>
          </Row>
        </Container>
      </header>
    );
  }
}

Header.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Header;
