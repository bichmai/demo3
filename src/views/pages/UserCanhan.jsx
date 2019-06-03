import React from "react";
import Datetime from "react-datetime";
import Select from "react-select";

// reactstrap components
import {
  Card, CardHeader, CardBody,
  FormGroup, Form, //Label,
  Input,
  Row, Col
} from "reactstrap";
import QRCode from "qrcode.react";
class UserCanhan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      // register form
      registerEmail: "",
      registerPassword: "",
      registerConfirmPassword: "",
      registerEmailState: "",
      registerPasswordState: "",
      registerConfirmPasswordState: "",
      // login form
      loginFullName: "",
      loginEmail: "",
      loginPassword: "",
      loginFullNameState: "",
      loginEmailState: "",
      loginPasswordState: "",
      // type validation form
      required: "",
      email: "",
      number: "",
      url: "",
      source: "",
      destination: "",
      requiredState: "",
      emailState: "",
      numberState: "",
      urlState: "",
      sourceState: "",
      destinationState: "",
      // range validation form
      minLength: "",
      maxLength: "",
      range: "",
      min: "",
      max: "",
      minLengthState: "",
      maxLengthState: "",
      rangeState: "",
      minState: "",
      maxState: "",

      optionCtry: [
        { value: "1", label: "Vietnam" },
        { value: "2", label: "China" },
        { value: "3", label: "Campuchia" },
        { value: "4", label: "Lao" }
      ],
      optionCtryc: [
        {
          value: "",
          label: "Choose option",
          isDisabled: true
        }
      ],
      optionCtr: [
        { value: "1", label: "Vietnam" },
        { value: "2", label: "China" },
        { value: "3", label: "Campuchia" },
        { value: "4", label: "Lao" }
      ],
      optionLastphone: [
        { value: "1", label: "+84" },
        { value: "2", label: "+1" },
        { value: "3", label: "+44" },
        { value: "4", label: "+81" }
      ],

      optionLastemail: [
        { value: "1", label: "@gmail.com" },
        { value: "2", label: "@abc.com" },
        { value: "3", label: "@vlive.com" },
        { value: "3", label: "@golddentnet.vn" }
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
    };
  }
  sepf = () => {
    this.setState({
      edit: !this.state.edit,
    })

  }

  // function that returns true if value is email, false otherwise
  verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if two strings are equal
  compare = (string1, string2) => {
    if (string1 === string2) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  // verifies if value is a valid URL
  verifyUrl = value => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };
  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "password":
        if (this.verifyLength(event.target.value, 1)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "equalTo":
        if (this.compare(event.target.value, this.state[stateNameEqualTo])) {
          this.setState({ [stateName + "State"]: "has-success" });
          this.setState({ [stateNameEqualTo + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
          this.setState({ [stateNameEqualTo + "State"]: "has-danger" });
        }
        break;
      case "number":
        if (this.verifyNumber(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "max-length":
        if (!this.verifyLength(event.target.value, stateNameEqualTo + 1)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "url":
        if (this.verifyUrl(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "min-value":
        if (
          this.verifyNumber(event.target.value) &&
          event.target.value >= stateNameEqualTo
        ) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "max-value":
        if (
          this.verifyNumber(event.target.value) &&
          event.target.value <= stateNameEqualTo
        ) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "range":
        if (
          this.verifyNumber(event.target.value) &&
          event.target.value >= stateNameEqualTo &&
          event.target.value <= maxValue
        ) {
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
  registerClick = () => {
    if (this.state.registerEmailState === "") {
      this.setState({ registerEmailState: "has-danger" });
    }
    if (
      this.state.registerPasswordState === "" ||
      this.state.registerConfirmPasswordState === ""
    ) {
      this.setState({ registerPasswordState: "has-danger" });
      this.setState({ registerConfirmPasswordState: "has-danger" });
    }
  };
  loginClick = () => {
    if (this.state.loginFullNameState === "") {
      this.setState({ loginFullNameState: "has-danger" });
    }
    if (this.state.loginEmailState === "") {
      this.setState({ loginEmailState: "has-danger" });
    }
    if (this.state.loginPasswordState === "") {
      this.setState({ loginPasswordState: "has-danger" });
    }
  };
  typeClick = () => {
    if (this.state.requiredState === "") {
      this.setState({ requiredState: "has-danger" });
    }
    if (this.state.emailState === "") {
      this.setState({ emailState: "has-danger" });
    }
    if (this.state.numberState === "") {
      this.setState({ numberState: "has-danger" });
    }
    if (this.state.urlState === "") {
      this.setState({ urlState: "has-danger" });
    }
    if (this.state.sourceState === "" || this.state.destinationState === "") {
      this.setState({ sourceState: "has-danger" });
      this.setState({ destinationState: "has-danger" });
    }
  };
  rangeClick = () => {
    if (this.state.minLengthState === "") {
      this.setState({ minLengthState: "has-danger" });
    }
    if (this.state.maxLengthState === "") {
      this.setState({ maxLengthState: "has-danger" });
    }
    if (this.state.rangeState === "") {
      this.setState({ rangeState: "has-danger" });
    }
    if (this.state.minValueState === "") {
      this.setState({ minValueState: "has-danger" });
    }
    if (this.state.maxValueState === "") {
      this.setState({ maxValueState: "has-danger" });
    }
    if (this.state.minState === "") {
      this.setState({ minState: "has-danger" });
    }
    if (this.state.maxState === "") {
      this.setState({ maxState: "has-danger" });
    }
  };
  render() {
    // taking all the states
    let {
      loginFullNameState,
      // loginEmailState,
      // maxState
    } = this.state;
    //const { optionCtry } = this.state;
    // const { optionCtry } = this.state;
    console.log(this.state.ctrySelect);
    // const { optionCtr } = this.state;
    console.log(this.state.ctrySelect);
    const { optionLastemail } = this.state;
    const { optionLastphone } = this.state;
    const { optionZIpcode } = this.state;
    const { optionCtryc } = this.state;


    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/bg/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <div href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/default-avatar.png")}
                      />
                      <h5 className="title">Chet Faker</h5>
                      <div className="image" />
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <QRCode value='asdas' size={230} />
                          <h5 className="title">34223sdf34dsda</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader className="inline-block">
                  <h5 className="title float-left">
                    Edit Profile
                  </h5>
                  <div className="float-right" style={{ marginTop: '-12px' }}>
                    <button className="btn btn-primary " onClick={this.sepf}> {this.state.edit ? "edit" : "save"}
                      {/* <i className="fas fa-save"> */}
                      {/* </i> Save */}
                    </button>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form>
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
                    <Row>
                      <Col sm="12">
                        <label >
                          Zip/Postal Code
                          </label>
                        <FormGroup>
                          <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            // ctry validation
                            name="zipcode"
                            value={this.state.zipcodeSelect}
                            onChange={value =>
                              this.setState({ zipcodeSelect: value })
                            }
                            options={optionZIpcode}
                            placeholder="Zip/Postal Code"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <label>Temporary Residence Address *</label>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="office"
                            placeholder="House No."
                            type="text"
                            onChange={e => this.change(e, "office", "length", 1)}
                            onFocus={e => this.setState({ officeFocus: true })}
                            onBlur={e => this.setState({ officeFocus: false })}
                          />
                          {this.state.officeState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="grvic"
                            placeholder="Village"
                            type="text"
                            onChange={e => this.change(e, "grvic", "length", 1)}
                            onFocus={e => this.setState({ grvicFocus: true })}
                            onBlur={e => this.setState({ grvicFocus: false })}
                          />
                          {this.state.grvicState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="wacoc"
                            placeholder="Ward"
                            type="text"
                            onChange={e => this.change(e, "wacoc", "length", 1)}
                            onFocus={e => this.setState({ wacocFocus: true })}
                            onBlur={e => this.setState({ wacocFocus: false })}
                          />
                          {this.state.wacocState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="codic"
                            placeholder="District"
                            type="text"
                            onChange={e => this.change(e, "codic", "length", 1)}
                            onFocus={e => this.setState({ codicFocus: true })}
                            onBlur={e => this.setState({ codicFocus: false })}
                          />
                          {this.state.codicState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="cityc"
                            placeholder="City"
                            type="text"
                            onChange={e => this.change(e, "cityc", "length", 1)}
                            onFocus={e => this.setState({ citycFocus: true })}
                            onBlur={e => this.setState({ citycFocus: false })}
                          />
                          {this.state.citycState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            // ctry validation
                            name="ctryc"
                            value={this.state.ctrycSelect}
                            onChange={value =>
                              this.setState({ ctrycSelect: value })
                            }
                            options={optionCtryc}
                            placeholder="Country"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <label>Identity Card/Identification *</label>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="indentityc"
                            placeholder="No."
                            type="text"
                            onChange={e => this.change(e, "indentityc", "length", 1)}
                            onFocus={e => this.setState({ indentitycFocus: true })}
                            onBlur={e => this.setState({ indentitycFocus: false })}
                          />
                          {this.state.indentitycState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "Date of issue" }}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="issuedre"
                            placeholder="Place of issue"
                            type="text"
                            onChange={e => this.change(e, "issuedre", "length", 1)}
                            onFocus={e => this.setState({ issuedreFocus: true })}
                            onBlur={e => this.setState({ issuedreFocus: false })}
                          />
                          {this.state.issuedreState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col sm="6">
                        <label>Tax Identification Number *</label>
                        <FormGroup>
                          <Input
                            name="taxcode"
                            placeholder="Tax code"
                            type="text"
                            onChange={e => this.change(e, "taxcode", "length", 1)}
                            onFocus={e => this.setState({ taxcodeFocus: true })}
                            onBlur={e => this.setState({ taxcodeFocus: false })}
                          />
                          {this.state.taxcodeState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <label>Present job</label>
                        <FormGroup>
                          <Input
                            name="Name"
                            placeholder="Name"
                            type="text"
                            onChange={e => this.change(e, "field", "length", 1)}
                            onFocus={e => this.setState({ fieldFocus: true })}
                            onBlur={e => this.setState({ fieldFocus: false })}
                          />
                          {this.state.fieldState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <label>Permanent Address *</label>
                      </Col>
                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="office"
                            placeholder="House No."
                            type="text"
                            onChange={e => this.change(e, "office", "length", 1)}
                            onFocus={e => this.setState({ officeFocus: true })}
                            onBlur={e => this.setState({ officeFocus: false })}
                          />
                          {this.state.officeState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="grvic"
                            placeholder="Village"
                            type="text"
                            onChange={e => this.change(e, "grvic", "length", 1)}
                            onFocus={e => this.setState({ grvicFocus: true })}
                            onBlur={e => this.setState({ grvicFocus: false })}
                          />
                          {this.state.grvicState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="wacoc"
                            placeholder="Ward"
                            type="text"
                            onChange={e => this.change(e, "wacoc", "length", 1)}
                            onFocus={e => this.setState({ wacocFocus: true })}
                            onBlur={e => this.setState({ wacocFocus: false })}
                          />
                          {this.state.wacocState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="codic"
                            placeholder="District"
                            type="text"
                            onChange={e => this.change(e, "codic", "length", 1)}
                            onFocus={e => this.setState({ codicFocus: true })}
                            onBlur={e => this.setState({ codicFocus: false })}
                          />
                          {this.state.codicState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col sm="4">
                        <FormGroup>
                          <Input
                            name="cityc"
                            placeholder="City"
                            type="text"
                            onChange={e => this.change(e, "cityc", "length", 1)}
                            onFocus={e => this.setState({ citycFocus: true })}
                            onBlur={e => this.setState({ citycFocus: false })}
                          />
                          {this.state.citycState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col sm="4">
                        <FormGroup>
                          <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            // ctry validation
                            name="ctryc"
                            value={this.state.ctrycSelect}
                            onChange={value =>
                              this.setState({ ctrycSelect: value })
                            }
                            options={optionCtryc}
                            placeholder="Country"
                          />

                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserCanhan;
