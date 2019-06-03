import React from "react";
// reactstrap components
import {
  Button,
  Card, CardHeader, CardBody, CardFooter,
  Label,Modal,Nav,TabContent,TabPane,
  FormGroup, Form,
  Input, InputGroupAddon, InputGroupText, InputGroup,
  Container, Col, Row
} from "reactstrap";
import {
  Redirect,
} from "react-router-dom";
import NotificationAlert from "react-notification-alert";
import ReCAPTCHA from 'react-grecaptcha';
import ModalVndpmt from "../tables/ModalVndpmt";
import ModalCsepmt from "../tables/ModalCsepmt";
import ModalPaypalpmt from "../tables/ModalPaypalpmt";
import ModalBtcpmt from "../tables/ModalBtcpmt";
const callback = function () { };
const expiredCallback = function () { };
class Login extends React.Component {
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
  toggleModalpayment = () => {
    this.setState({
      modalpayment: !this.state.modalpayment
    });
  }
  toggleModalDepositVnd = () => {
    this.setState({
      modalDepositVnd: !this.state.modalDepositVnd
    });
  }
  toggleModalDepositCse = () => {
    this.setState({
      modalDepositCse: !this.state.modalDepositCse
    });
  }
  toggleModalDepositPaypal = () => {
    this.setState({
      modalDepositPaypal: !this.state.modalDepositPaypal
    });
  }
  toggleModalDepositBtc = () => {
    this.setState({
      modalDepositBtc: !this.state.modalDepositBtc
    });
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
    this.props.history.push('/user/wallet');
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
                        onClick={this.toggleModalpayment}
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
                <Modal isOpen={this.state.modalpayment} toggle={this.toggleModalpayment} size="lg">
            <Container fluid>
              <h5>Payment Methods<button type="button" className="close" data-dismiss="modal" aria-label="Close"
                onClick={this.toggleModalpayment}>
                <span aria-hidden="true">×</span>
              </button></h5>
              <Row>
                <Col md="12">
                  <CardBody>
                    <Row>
                      <Col className="ml-auto mr-auto">
                        <Card className="card-plain card-subcategories">
                          <CardBody>
                            {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                            <Nav
                              className="nav-pills-primary nav-pills-icons justify-content-center"
                              pills
                              role="tablist"
                            >
                              {/* VND */}
                              <Button
                                data-toggle="tab"
                                href="#pablo"
                                role="tablist"
                                color="primary"
                                className={
                                  this.state.pageTabs === "vndPages"
                                    ? "active"
                                    : ""
                                }
                                onClick={this.toggleModalDepositVnd}
                              >
                                VND
                                  </Button>
                              {/* CSE */}
                              <Button
                                data-toggle="tab"
                                href="#pablo"
                                role="tablist"
                                color="primary"
                                className={
                                  this.state.pageTabs === "csePages"
                                    ? "active"
                                    : ""
                                }
                                onClick={this.toggleModalDepositCse}
                              >
                                CSE
                                  </Button>
                              {/* Paypal */}
                              <Button
                                data-toggle="tab"
                                href="#pablo"
                                role="tablist"
                                color="primary"
                                className={
                                  this.state.pageTabs === "paypalPages"
                                    ? "active"
                                    : ""
                                }
                                onClick={this.toggleModalDepositPaypal}
                              >
                                Paypal
                                  </Button>
                              {/* btc */}
                              <Button
                                data-toggle="tab"
                                color="primary"
                                href="#pablo"
                                role="tablist"
                                className={
                                  this.state.pageTabs === "btcPages"
                                    ? "active"
                                    : ""
                                }
                                onClick={this.toggleModalDepositBtc}
                              >
                                BTC
                              </Button>
                            </Nav>
                            <TabContent
                              className="tab-space tab-subcategories"
                              activeTab={this.state.pageTabs}
                            >
                              <TabPane tabId="vndPages">
                                <ModalVndpmt sVnd={this.state.modalDepositVnd} fVnd={this.toggleModalDepositVnd} />
                              </TabPane>
                              <TabPane tabId="csePages">
                                <ModalCsepmt sCse={this.state.modalDepositCse} fCse={this.toggleModalDepositCse} />
                              </TabPane>
                              <TabPane tabId="paypalPages">
                                <ModalPaypalpmt sPaypal={this.state.modalDepositPaypal} fPaypal={this.toggleModalDepositPaypal} />
                                </TabPane>
                              <TabPane tabId="btcPages">
                                <ModalBtcpmt sBtc={this.state.modalDepositBtc} fBtc={this.toggleModalDepositBtc} />
                                </TabPane>
                            </TabContent>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Col>
                {/* <Col md="12">
                  <Button className="pull-left" //aria-hidden="true"
                    onClick={this.abc}>
                    Payment
                    </Button>
                  <Button className="pull-right"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={this.toggleModalpayment}
                    aria-hidden="true"
                  >
                    Cancel
                    </Button>
                </Col> */}
              </Row>
            </Container>
          </Modal>
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

export default Login;
