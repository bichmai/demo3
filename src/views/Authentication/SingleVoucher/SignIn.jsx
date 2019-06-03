import React from "react";
// reactstrap components
import {
  Button,
  Card, CardHeader, CardBody, CardFooter,
  Label,
  FormGroup, Form,
  Input, InputGroupAddon, InputGroupText, InputGroup,
  Container, Col, Row
} from "reactstrap";
import {
  Redirect,
} from "react-router-dom";
import NotificationAlert from "react-notification-alert";
import ReCAPTCHA from 'react-grecaptcha';
const callback = function () { };
const expiredCallback = function () { };
class Logins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      username: "",
      password: "",
      alert_message: "",
      visible: true,
    };
  }
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  // thong bao trang thai
  onFail = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <b>Email does not exist</b>
      ),
      type: 'danger',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  Login = () => {
    this.props.history.push('/user/dashboard');
  };
  handleKeyPress(event) {

    if (event.key === '13' || event.which === 13) {
      document.getElementById("Login").click();
    }
  }

  isAuthenticated() {
    const accessToken = sessionStorage.getItem("accessToken");
    return accessToken && accessToken.length > 10;
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  registerClick = () => {
    this.props.history.push('/auth/register');
  };
  forgetClick = () => {
    this.props.history.push('/auth/lock-screen');
  };
  render() {
    const AuthRoute = this.isAuthenticated();

    return (
      <div className="login-page">
        <NotificationAlert ref="notificationAlert" />
        {AuthRoute ? (
          <Redirect to={{ pathname: '/user/dashboard' }} />
        ) : (
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" lg="5" md="6" sm="6">
                  <Card className="card-login">
                    <CardHeader>
                      <CardHeader>
                        <h3 className="header text-center">Login</h3>
                      </CardHeader>
                    </CardHeader>
                    <CardBody  >
                      <Form action="" className="form" method="" onKeyPress={this.handleKeyPress} >
                        <FormGroup className="has-label">
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="far fa-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              type="text"
                              name="username"
onChange={this.onChange}
                              onKeyDown={this.handleKeyPress}
                            />
                          </InputGroup>

                        </FormGroup>
                        <FormGroup className="has-label">
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="nc-icon nc-key-25" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password..."
                              name="password"
                              type="password"
                              onChange={this.onChange}
                              autoComplete="off"
                            />
                          </InputGroup>

                        </FormGroup>
                        <br />
                        <FormGroup>
                          <FormGroup check>
                            <Label check>
                            <ReCAPTCHA
                          sitekey="6LenMaQUAAAAANkufe5uSE640zvgd7tQD5ddusot"
                          callback={callback}
                          expiredCallback={expiredCallback}
                          locale="en"
                        />
                                </Label>
                          </FormGroup>
                        </FormGroup>
                      </Form>
                      <Button
                        block
                        id="Login"
                        className="btn-round mb-3"
                        color="info"
                        onClick={this.Login}
                        onKeyPress={this.handleKeyPress}
                      >
                        <i className="fas fa-sign-in-alt"></i> Login
                          </Button>

                      <Button
                        block
                        className="btn-round mb-3"
                        color="primary"
                        href="#"
                        onClick={this.registerClick}
                      >
                        Register
                        </Button>
                      <Button
                        block
                        id="forgot password"
                        className="btn-round mb-3"
                        color="info"
                        onClick={this.forgetClick}
                      >
                        <i className="fas fa-sign-in-alt"></i> Forgot Account
                          </Button>
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          )}
        <div
          className="full-page-background"
          style={{
backgroundImage: `url(${require("assets/img/bg/login.jpg")})`,
            position: "absolute"
          }}
        />
      </div>
    );
  }
}

export default Logins;