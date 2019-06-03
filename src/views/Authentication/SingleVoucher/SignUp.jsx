import React from "react";
import Select from "react-select";
// reactstrap components
import {
  Button, Nav, NavItem, NavLink, TabContent, TabPane,
  Card, CardHeader, CardBody, CardFooter,
  FormGroup,
  Input,
  Container, Row, Col,
} from "reactstrap";

import SignUp from "../../../Api/Auth/SignUp";
import NotificationAlert from "react-notification-alert";

class Registers extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  Login = () => {
    this.props.history.push('/user/dashboard');
  };
  constructor(props) {
    super(props);
    this.state = {

      // login form
      loginFullName: "",
      name: "",
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
      type: "USER",
      visible: true,
      horizontalTabs: "home",
      verticalTabs: "info",
      pageTabs: "homePages",
      openedCollapses: ["collapseOne", "collapse1"],
      lastphoneSelect: "",
      lastemailSelect: "",
      zipcodeSelect: "",
      ctrySelect: "",
      ctrSelect: "",
      //zipcodeSelect: "",
      ctrycSelect: "",
      ctrcSelect: "",
      lastphonereSelect: "",
      lastemailreSelect: "",
      optionLastphone: [
        { value: "1", label: "+84" },
        { value: "2", label: "+7 840" },
        { value: "3", label: "+7 940" },
        { value: "4", label: "+995 44" },
        { value: "5", label: "+93" },
        { value: "6", label: "+358" },
        { value: "7", label: "+355" },
        { value: "8", label: "+213" },
        { value: "9", label: "+1 684" },
        { value: "10", label: "+376" },
        { value: "11", label: "+244" },
        { value: "12", label: "+1 264" },
        { value: "13", label: "+1 268" },
        { value: "14", label: "+54" },
        { value: "15", label: "+374" },
        { value: "16", label: "+297" },
      ],
      optionLastemail: [
        { value: "1", label: "@gmail.com" },
        { value: "2", label: "@gmail.com.vn" },
        { value: "3", label: "@hotmail.com" },
        { value: "4", label: "@hotmail.com.vn" },
        { value: "5", label: "@live.com" },
        { value: "6", label: "@live.com.vn" },
        { value: "7", label: "@yahoo.com" },
        { value: "4", label: "@yahoo.com.vn" },
      ],
      optionZipcode: [

        { value: "1", label: "7000" },
        { value: "2", label: "10265" },
        { value: "3", label: "10232" },
        { value: "4", label: "10287" },
        { value: "5", label: "10270" },
        { value: "6", label: "10312" },
        { value: "7", label: "70223" },
        { value: "4", label: "10329" },
      ],
      optionCtry: [
        { value: "1", label: "Vietnam" },
        { value: "2", label: "China" },
        { value: "3", label: "Campuchia" },
        { value: "4", label: "Lao" }
      ],
      optionCtr: [
        { value: "1", label: "Vietnam" },
        { value: "2", label: "China" },
        { value: "3", label: "Campuchia" },
        { value: "4", label: "Lao" }
      ],
      optionZIpcode: [

        { value: "1", label: "7000" },
        { value: "2", label: "10265" },
        { value: "3", label: "10232" },
        { value: "4", label: "10287" },
        { value: "5", label: "10270" },
        { value: "6", label: "10312" },
        { value: "7", label: "70223" },
        { value: "4", label: "10329" },
      ],
      optionCtryc: [
        {
          value: "",
          label: "Choose option",
          isDisabled: true
        },
        { value: "1", label: "Vietnam" },
        { value: "2", label: "China" },
        { value: "3", label: "Campuchia" },
        { value: "4", label: "Lao" }
      ],
      optionCtrc: [
        {
          value: "",
          label: "Choose option",
          isDisabled: true
        },
        { value: "1", label: "Vietnam" },
        { value: "2", label: "China" },
        { value: "3", label: "Campuchia" },
        { value: "4", label: "Lao" }
      ],
      optionLastphonere: [
        { value: "1", label: "+84" },
        { value: "2", label: "+7 840" },
        { value: "3", label: "+7 940" },
        { value: "4", label: "+995 44" },
        { value: "5", label: "+93" },
        
      ],
      optionLastemailre: [
        { value: "1", label: "@gmail.com" },
        { value: "2", label: "@gmail.com.vn" },
        { value: "3", label: "@hotmail.com" },
        { value: "4", label: "@hotmail.com.vn" },
        { value: "5", label: "@live.com" },
        { value: "6", label: "@live.com.vn" },
        { value: "7", label: "@yahoo.com" },
        { value: "4", label: "@yahoo.com.vn" },
      ],
    };
    this.onChange = this.onChange.bind(this);

  }
  //thong bao loi phone number
  onPhoneNumber = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>PHONE IS ALREADY EXISTS</b>
          </div>
        </div>
      ),
      type: 'danger',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };


  onFail = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Email does not exist</b>
          </div>
        </div>
      ),
      type: 'danger',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  // thông báo thành công
  onsuccess = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Success full</b>
          </div>
        </div>
      ),
      type: 'danger',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  SignUpUser = () => {
    const { name, email, phoneNumber, type, username, password } = this.state;
    SignUp(name, email, phoneNumber, type, username, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  loginClick = () => {
    this.props.history.push("/auth/logins")
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  collapsesToggle = collapse => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter(item => item !== collapse)
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses
      });
    }
  };
  render() {
    let {
      loginFullNameState,
    } = this.state;
    const { optionLastemail, optionLastphone } = this.state;
    

    return (
      <div className="register-page ">
        <NotificationAlert ref="notificationAlert" />
        <Container>
          <Col md="12">
            <Card>
              <CardHeader className="text-center">
                <h5>Register</h5>
                <div className="social">
                   <Button className="btn-icon btn-round" color="twitter">
                    <i className="fa fa-twitter" />
                  </Button> 
                  <Button className="btn-icon btn-round" color="dribbble">
                    <i className="fa fa-dribbble" />
                  </Button>
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fa fa-facebook-f" />
                  </Button>
                  <p className="card-description">or be classical</p>
                </div>
              </CardHeader>
              <CardBody>
                <div className="nav-tabs-navigation">
                  <div className="nav-tabs-wrapper">
                    <Nav id="tabs" role="tablist" tabs>
                      <NavItem>
                        <NavLink
                          aria-expanded={this.state.horizontalTabs === "home"}
                          data-toggle="tab"
                          href="#pablo"
                          role="tab"
                          className={
                            this.state.horizontalTabs === "home"
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            this.setState({ horizontalTabs: "home" })
                          }
                        >
                          Personal
                          </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-expanded={
                            this.state.horizontalTabs === "messages"
                          }
                          data-toggle="tab"
                          href="#pablo"
                          role="tab"
                          className={
                            this.state.horizontalTabs === "messages"
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            this.setState({ horizontalTabs: "messages" })
                          }
                        >
                          Organization
                          </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                <TabContent
                  className="text-left"
                  id="my-tab-content"
                  activeTab={this.state.horizontalTabs}
                >
                  <TabPane tabId="home" role="tabpanel">
                    {/* personal information */}
                    <Container>
                      <Row>
                        <Col md="4">
                          <FormGroup className={`has-label ${loginFullNameState}`}>
                            <label>
                              First Name
                                </label>
                            <Input
                              placeholder="First Name"
                              name="First Name"
                              type="text"
                              onChange=
                              {e =>
                                this.change(e, "loginFullName", "length", 1)
                              }
                            />
                            {this.state.loginFullNameState === "has-danger" ? (
                              <label className="error">
                                This field is required.
                                  </label>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup className={`has-label ${loginFullNameState}`}>
                            <label>
                              Midddle name
                                </label>
                            <Input
                              placeholder="Midddle name"
                              name="Midddle name"
                              type="text"
                              onChange=
                              {e =>
                                this.change(e, "loginFullNameState", "length", 1)
                              }
                            />
                            {this.state.loginFullNameState === "has-danger" ? (
                              <label className="error">
                                This field is required.
                                  </label>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup className={`has-label ${loginFullNameState}`}>
                            <label >
                              Last Name
                                </label>
                            <Input
                              placeholder="Last Name"
                              type="text"
                              onChange=
                              {e =>
                                this.change(e, "loginFullName", "length")
                              }
                            />
                            {this.state.loginFullNameState === "has-danger" ? (
                              <label className="error">
                                This field is required.
                                  </label>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="2">
                          <FormGroup>
                            <Select
                              className="react-select"
                              classNamePrefix="react-select"
                              name="lastphone"
                              value={this.state.lastphoneSelect}
                              onChange={value =>
                                this.setState({ lastphoneSelect: value })
                              }
                              options={optionLastphone}
                              placeholder="+84"
                            //isDisabled
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Input
                              name="phone"
                              placeholder="Mobile phone"
                              type="text"
                              onChange={e => this.change(e, "phonec", "length", 1)}
                              onFocus={e => this.setState({ phonecFocus: true })}
                              onBlur={e => this.setState({ phonecFocus: false })}
                            />
                            {this.state.phonecState === "has-danger" ? (
                              <label className="error text-danger">This field is required.</label>
                            ) : null}
                          </FormGroup>
                        </Col>                     
                        <Col sm="3">
                          <FormGroup>
                            <Input
                              name="emailc"
                              placeholder="E-mail *"
                              type="text"
                              onChange={e => this.change(e, "emailc", "length", 1)}
                              onFocus={e => this.setState({ emailcFocus: true })}
                              onBlur={e => this.setState({ emailcFocus: false })}
                            />
                            {this.state.emailcState === "has-danger" ? (
                              <label className="error text-danger">This field is required.</label>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col sm="3">
                          <FormGroup>
                            <Select
                              className="react-select"
                              classNamePrefix="react-select"
                              // ctry validation
                              name="lastemail"
                              value={this.state.lastemailSelect}
                              onChange={value =>
                                this.setState({ lastemailSelect: value })
                              }
                              options={optionLastemail}
                              placeholder="@gmail.com"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="2">
                          <label>Sex *</label>
                        </Col>
                        <Col sm="3">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          Male <span className="form-check-sign" />
                        </Col>
                        <Col sm="7">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          Female <span className="form-check-sign" />
                        </Col>
                      </Row>
                      <Row >
                        <Col sm="3">
                          <label>Type of registration *</label>
                        </Col>
                        <Col sm="3">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          Personal <span className="form-check-sign" />
                        </Col>
                        <Col sm="3">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          Company <span className="form-check-sign" />
                        </Col >
                        <Col sm="3" >
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          Cooperative <span className="form-check-sign" />
                        </Col>
                      </Row>
                      <Row >
                        <Col className="col-md-3 offset-md-3">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          NGO <span className="form-check-sign" />
                        </Col>
                        <Col sm="3">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          Govermant <span className="form-check-sign" />
                        </Col>
                        <Col sm="3">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          Organization <span className="form-check-sign" />
                        </Col>
                      </Row>
                    </Container>
                  </TabPane>

                  {/* organizational information */}
                  <TabPane tabId="messages" role="tabpanel">
                    <Container>
                      <Col sm="12">
                        <label>Organizational Information *</label>
                      </Col>
                      <Row>
                        <Col sm="3">
                          <FormGroup>
                            <Input
                              name="organizationfirst"
                              placeholder="First Name *"
                              type="text"
                              onChange={e => this.change(e, "organizationfirst", "length", 1)}
                              onFocus={e => this.setState({ organizationfirstFocus: true })}
                              onBlur={e => this.setState({ organizationfirstFocus: false })}
                            />
                            {this.state.organizationfirstState === "has-danger" ? (
                              <label className="error text-danger">This field is required.</label>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col sm="3">
                          <FormGroup>
                            <Input
                              name="organizationlast"
                              placeholder="Last Name *"
                              type="text"
                              onChange={e => this.change(e, "organizationlast", "length", 1)}
                              onFocus={e => this.setState({ organizationlastFocus: true })}
                              onBlur={e => this.setState({ organizationFocus: false })}
                            />
                            {this.state.organizationlastState === "has-danger" ? (
                              <label className="error text-danger">This field is required.</label>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col sm="6">
                          <FormGroup>
                            <Input
                              name="website"
                              placeholder="Website Company *"
                              type="text"
                              onChange={e => this.change(e, "website", "length", 1)}
                              onFocus={e => this.setState({ websiteFocus: true })}
                              onBlur={e => this.setState({ websiteFocus: false })}
                            />
                            {this.state.websiteState === "has-danger" ? (
                              <label className="error text-danger">This field is required.</label>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="2">
                          <FormGroup>
                            <Select
                              className="react-select"
                              classNamePrefix="react-select"
                              name="lastphone"
                              value={this.state.lastphoneSelect}
                              onChange={value =>
                                this.setState({ lastphoneSelect: value })
                              }
                              options={optionLastphone}
                              placeholder="+84"
                            //isDisabled
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Input
                              name="phonec"
                              placeholder="Phone number *"
                              type="text"
                              onChange={e => this.change(e, "phonec", "length", 1)}
                              onFocus={e => this.setState({ phonecFocus: true })}
                              onBlur={e => this.setState({ phonecFocus: false })}
                            />
                            {this.state.phonecState === "has-danger" ? (
                              <label className="error text-danger">This field is required.</label>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col sm="3">
                          <FormGroup>
                            <Input
                              name="emailc"
                              placeholder="E-mail *"
                              type="text"
                              onChange={e => this.change(e, "emailc", "length", 1)}
                              onFocus={e => this.setState({ emailcFocus: true })}
                              onBlur={e => this.setState({ emailcFocus: false })}
                            />
                            {this.state.emailcState === "has-danger" ? (
                              <label className="error text-danger">This field is required.</label>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col sm="3">
                          <FormGroup>
                            <Select
                              className="react-select"
                              classNamePrefix="react-select"
                              // ctry validation
                              name="lastemail"
                              value={this.state.lastemailSelect}
                              onChange={value =>
                                this.setState({ lastemailSelect: value })
                              }
                              options={optionLastemail}
                              placeholder="@gmail.com"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      {/* Type of registration*/}
                      <Row >
                        <Col sm="3">
                          <label>Type of registration *</label>
                        </Col>
                        <Col sm="3">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          Basis <span className="form-check-sign" />
                        </Col>
                        <Col sm="3">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          HTX <span className="form-check-sign" />
                        </Col>
                        <Col sm="3">
                          <input defaultValue="option1"
                            id="exampleRadios11"
                            name="exampleRadioz"
                            type="radio" />
                          Company <span className="form-check-sign" />
                        </Col>
                      </Row>
                    </Container>
                  </TabPane>
                </TabContent>
              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-round mb-3"
                  color="info"
                  onClick={this.Login}
                >
                  Register
                  </Button>
                <Button
                  className="btn-round mb-3"
                  color="primary"
                  onClick={this.loginClick}
                >
                  Already has Account ?
                  </Button>
              </CardFooter>
            </Card>
          </Col>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/dangky.jpg")})`
          }}
        />
      </div>
    );
  }
}

export default Registers;