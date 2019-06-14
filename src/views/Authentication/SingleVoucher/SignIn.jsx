import React from "react";
import classnames from "classnames";
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
// import ReCAPTCHA from 'react-grecaptcha';
const callback = function () { };
const expiredCallback = function () { };
class Logins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameState: "",
      passwordState:"",
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
  verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  };
  isValidated = () => {
    if (
      this.state.usernameState === "has-success" &&
      this.state.passwordState === "has-success"
    ) {
      return true;
    } else {
      if (this.state.usernameState !== "has-success") {
        this.setState({ usernameState: "has-danger" });
      }
      if (this.state.passwordState !== "has-success") {
        this.setState({ passwordState: "has-danger" });
      }
      return false;
    }
  };
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
                          <InputGroup
                            className={classnames(this.state.usernameState, {
                              "input-group-focus": this.state.usernameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="nc-icon nc-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="username"
                              placeholder="User name *"
                              type="text"
                              onChange={e => this.change(e, "username", "length", 1)}
                              onFocus={e => this.setState({ usernameFocus: true })}
                              onBlur={e => this.setState({ usernameFocus: false })}
                            />
                            {this.state.usernameState === "has-danger" ? (
                              <label className="error">This field is required.</label>
                            ) : null}
                          </InputGroup>
                        </FormGroup>



                        <FormGroup className="has-label">
                        <InputGroup
                            className={classnames(this.state.passwordState, {
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="nc-icon nc-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="password"
                              placeholder="Pass word"
                              type="password"
                              onChange={e => this.change(e, "password", "length", 1)}
                              onFocus={e => this.setState({ passwordFocus: true })}
                              onBlur={e => this.setState({ passwordFocus: false })}
                            />
{this.state.passwordState === "has-danger" ? (
                              <label className="error">This field is required.</label>
                            ) : null}
                          </InputGroup>
                        </FormGroup>
                        <br />
                        {/* {/* <FormGroup>
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
                        </FormGroup> */}
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
                      {/* <Button
                        block
                        id="forgot password"
                        className="btn-round mb-3"
                        color="info"
                        onClick={this.forgetClick}
                      >
                        <i className="fas fa-sign-in-alt"></i> Forgot Account
                          </Button> */}
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