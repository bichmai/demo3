import React from "react";
import Datetime from "react-datetime";
import Select from "react-select";

// reactstrap components
import {
  Card, CardHeader, CardBody,
  FormGroup, Form, Container, Label,
  Input,
  Row, Col, 
} from "reactstrap";
import QRCode from "qrcode.react";
import ModalAddField from "./ModalAddField";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      modalAddField: false,

      // type validation form
      email: "",      
    
      optionAddField: [
        { value: "1", label: "A" },
        { value: "2", label: "B" },
        { value: "3", label: "C" }
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

      optionCtryc: [    
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
  addField = () => {
    this.setState({
      modalAddField: !this.state.modalAddField,
    })

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
  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
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



      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  };


  render() {

    const { optionCtryc, optionCtrc, optionLastemail, optionLastphone,
      optionZIpcode, optionLastemailre, optionLastphonere} = this.state;

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
                    <div onClick={e => e.preventDefault()}>
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
                      {/* <i className="fas fa-save">
                      </i> Save */}
                    </button>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <label>Organizational Information *</label>
                      </Col>
                      <Col md="3">
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
                      <Col md="3">
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
                      <Col md="6">
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

                      <Col md="2">
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

                      <Col md="4">
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

                      <Col md="3">
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
                      <Col md="3">
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
                      {/* Type of registration*/}
                      <Container>
                        <Row >
                          <Col md="3">
                            <label>Type of registration *</label>
                          </Col>
                          <Col md="3">
                            <input defaultValue="option1"
                              id="exampleRadios11"
                              name="exampleRadioz"
                              type="radio" />
                            Basis <span className="form-check-sign" />
                          </Col>
                          <Col md="3">
                            <input defaultValue="option1"
                              id="exampleRadios11"
                              name="exampleRadioz"
                              type="radio" />
                            HTX <span className="form-check-sign" />
                          </Col>
                          <Col md="3">
                            <input defaultValue="option1"
                              id="exampleRadios11"
                              name="exampleRadioz"
                              type="radio" />
                            Company <span className="form-check-sign" />
                          </Col>
                        </Row>
                      </Container>
                      <Col md="12">
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

                      {/*office address*/}
                      <Col md="12">
                        <label>Office address *</label>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="office"
                            placeholder="Office address"
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

                      <Col md="4">
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

                      <Col md="4">
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

                      <Col md="4">
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

                      <Col md="4">
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

                      <Col md="4">
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
                      {/*Trading address*/}
                      <Col md="12">
                        <label>Trading address *</label>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="trading"
                            placeholder="Trading"
                            type="text"
                            onChange={e => this.change(e, "trading", "length", 1)}
                            onFocus={e => this.setState({ tradingFocus: true })}
                            onBlur={e => this.setState({ tradingFocus: false })}
                          />
                          {this.state.tradingState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="villagec"
                            placeholder="Village"
                            type="text"
                            onChange={e => this.change(e, "villagec", "length", 1)}
                            onFocus={e => this.setState({ villagecFocus: true })}
                            onBlur={e => this.setState({ villagecFocus: false })}
                          />
                          {this.state.villagecState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="wardc"
                            placeholder="Ward"
                            type="text"
                            onChange={e => this.change(e, "wardc", "length", 1)}
                            onFocus={e => this.setState({ wardcFocus: true })}
                            onBlur={e => this.setState({ wardcFocus: false })}
                          />
                          {this.state.wardcState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="districtc"
                            placeholder="District"
                            type="text"
                            onChange={e => this.change(e, "districtc", "length", 1)}
                            onFocus={e => this.setState({ districtcFocus: true })}
                            onBlur={e => this.setState({ districtcFocus: false })}
                          />
                          {this.state.districtcState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="ctyc"
                            placeholder="City"
                            type="text"
                            onChange={e => this.change(e, "ctyc", "length", 1)}
                            onFocus={e => this.setState({ ctycFocus: true })}
                            onBlur={e => this.setState({ ctycFocus: false })}
                          />
                          {this.state.ctycState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup>
                          <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            // ctry validation
                            name="ctrc"
                            value={this.state.ctrcSelect}
                            onChange={value =>
                              this.setState({ ctrcSelect: value })
                            }
                            options={optionCtrc}
                            placeholder="Country"
                          />

                        </FormGroup>
                      </Col>

                      {/* business register number*/}
                      <Col md="12">
                        <label>Business register number *</label>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="business"
                            placeholder="Business register number"
                            type="text"
                            onChange={e => this.change(e, "business", "length", 1)}
                            onFocus={e => this.setState({ businessFocus: true })}
                            onBlur={e => this.setState({ businessFocus: false })}
                          />
                          {this.state.businessState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "Release date" }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="issuedc"
                            placeholder="Issued by"
                            type="text"
                            onChange={e => this.change(e, "issuedc", "length", 1)}
                            onFocus={e => this.setState({ issuedcFocus: true })}
                            onBlur={e => this.setState({ issuedcFocus: false })}
                          />
                          {this.state.issuedcState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      {/* tax code */}
                      <Col md="6">
                        <label>Tax code *</label>
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
                      {/* field of activity */}
                      <Col md="6">
                        <label>Field of activity *</label>
                        <FormGroup>
                          <Input
                            name="field"
                            placeholder="Field of activity"
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
                      {/* Bank account number */}

                      <Col md="6">
                        <label>Bank account number *</label>
                        <FormGroup>
                          <Input
                            name="bankaccountc"
                            placeholder="Bank account number"
                            type="text"
                            onChange={e => this.change(e, "bankaccountc", "length", 1)}
                            onFocus={e => this.setState({ bankaccountcFocus: true })}
                            onBlur={e => this.setState({ bankaccountcFocus: false })}
                          />
                          {this.state.bankaccountcState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      {/* At the bank*/}
                      <Col md="6">
                        <label>At the bank *</label>
                        <FormGroup>
                          <Input
                            name="atbankc"
                            placeholder="At the bank"
                            type="text"
                            onChange={e => this.change(e, "atbankc", "length", 1)}
                            onFocus={e => this.setState({ atbankcFocus: true })}
                            onBlur={e => this.setState({ atbankcFocus: false })}
                          />
                          {this.state.atbankcState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      {/* representative information */}
                      <Col md="12">
                        <label>Representative information *</label>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="representative"
                            placeholder="Representative name"
                            type="text"
                            onChange={e => this.change(e, "representative", "length", 1)}
                            onFocus={e => this.setState({ representativeFocus: true })}
                            onBlur={e => this.setState({ representativeFocus: false })}
                          />
                          {this.state.representativeState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Input
                            name="position"
                            placeholder="Position"
                            type="text"
                            onChange={e => this.change(e, "position", "length", 1)}
                            onFocus={e => this.setState({ positionFocus: true })}
                            onBlur={e => this.setState({ positionFocus: false })}
                          />
                          {this.state.positionState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="2">
                        <FormGroup>
                          <Input
                            name="job"
                            placeholder="Job"
                            type="text"
                            onChange={e => this.change(e, "job", "length", 1)}
                            onFocus={e => this.setState({ jobFocus: true })}
                            onBlur={e => this.setState({ jobFocus: false })}
                          />
                          {this.state.jobState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="2">
                        <FormGroup>
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "Birdthday" }}
                          />
                        </FormGroup>
                      </Col>

                      <Col md="2">
                        <FormGroup>
                          <Input
                            name="nationality"
                            placeholder="Nationality"
                            type="text"
                            onChange={e => this.change(e, "nationality", "length", 1)}
                            onFocus={e => this.setState({ nationalityFocus: true })}
                            onBlur={e => this.setState({ nationalityFocus: false })}
                          />
                          {this.state.nationalityState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="2">
                        <FormGroup>
                          <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            // ctry validation
                            name="lastphonere"
                            value={this.state.lastphonereSelect}
                            onChange={value =>
                              this.setState({ lastphonereSelect: value })
                            }
                            options={optionLastphonere}
                            placeholder="+84"
                          // isDisabled
                          />

                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="phonere"
                            placeholder="Mobile Phone number"
                            type="text"
                            onChange={e => this.change(e, "phonere", "length", 1)}
                            onFocus={e => this.setState({ phonereFocus: true })}
                            onBlur={e => this.setState({ phonereFocus: false })}
                          />
                          {this.state.phonereState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>

                      <Col md="3">
                        <FormGroup>
                          <Input
                            name="emailre"
                            placeholder="E-mail"
                            type="text"
                            onChange={e => this.change(e, "emailre", "length", 1)}
                            onFocus={e => this.setState({ emailreFocus: true })}
                            onBlur={e => this.setState({ emailreFocus: false })}
                          />
                          {this.state.emailreState === "has-danger" ? (
                            <label className="error text-danger">This field is required.</label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            // ctry validation
                            name="lastemailre"
                            value={this.state.lastemailreSelect}
                            onChange={value =>
                              this.setState({ lastemailreSelect: value })
                            }
                            options={optionLastemailre}
                            placeholder="@gmail.com"
                          />

                        </FormGroup>
                      </Col>

                      {/* identity card */}
                      <Col md="12">
                        <label>Identity card *</label>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="indentityc"
                            placeholder="Identity"
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
                      <Col md="4">
                        <FormGroup>
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "Release date" }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Input
                            name="issuedre"
                            placeholder="Issued by"
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

                      {/* Add field */}

                      <Col md="12">
                        <label>Add field</label> </Col>                     
                        <Col className="checkbox-radios" md="12">
                          <FormGroup check >
                            <Label check >
                              <Input defaultChecked type="checkbox" onClick={this.addField} />
                              <span className="form-check-sign" />
                              Other information
                          </Label>
                          </FormGroup>
                        </Col>                     
                      <ModalAddField isOpenA={this.state.modalAddField} toggleA={this.addField} />                       
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

export default UserProfile;
