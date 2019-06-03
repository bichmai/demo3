import React from "react";
//import classnames from "classnames";
import Select from "react-select";
import Datetime from 'react-datetime';
//import classnames from "classnames";
// reactstrap components
import {
  Input,
  Container,
  //InputGroupAddon,
  //InputGroupText,
  //InputGroup,
  FormGroup,
  Row,
  Col,
  Form,
  Label,
} from "reactstrap";


// core components
//import PictureUpload from "components/CustomUpload/PictureUpload.jsx";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationfirst: "",
      organizationlast: "",
      website: "",
      phonec: "",
      emailc: "",
      office: "",
      grvic: "",
      wacoc: "",
      codic: "",
      cityc: "",
      trading: "",
      villagec: "",
      wardc: "",
      districtc: "",
      ctyc: "",
      business: "",
      issuedc: "",
      taxcode: "",
      field: "",
      bankaccountc: "",
      atbankc: "",
      representative: "",
      position: "",
      job: "",
      nationality: "",
      indentityc: "",
      issuedre: "",
      phonere:"",
      emailre:"",
      //email: "",
      organizationfirstState: "",
      organizationlastState: "",
      websiteState: "",
      phonecState: "",
      emailcState: "",
      officeState: "",
      grvicState: "",
      wacocState: "",
      codicState: "",
      citycState: "",
      tradingState: "",
      villagecState: "",
      wardcState: "",
      districtcState: "",
      ctycState: "",
      businessState: "",
      issuedcState: "",
      taxcodeState: "",
      fieldState: "",
      bankaccountcState: "",
      atbankcState: "",
      representativeState: "",
      positionState: "",
      jobState: "",
      nationalityState: "",
      indentitycState: "",
      issuedreState: "",
      phonereState:"",
      emailreState:"",
      //state value select for option
      lastphoneSelect: "",
      lastemailSelect: "",
      zipcodeSelect:"",
      ctrycSelect: "",
      ctrcSelect: "",
      lastphonereSelect: "",
      lastemailreSelect: "",

      optionLastphone: [
        {
          value: "",
          label: "Single Option",
          isDisabled: true
        },
        { value: "1", label: "+84" },
        { value: "2", label: "+1" },
        { value: "3", label: "+44" },
        { value: "4", label: "+81" }
      ],

      optionLastemail: [
        {
          value: "",
          label: "Single Option",
          isDisabled: true
        },
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
      //optionValuevc: [
      // {
      //  value: "",
      //  label: "Single Option",
      //  isDisabled: true
      // },
      // { value: "1", label: "BTC" },
      // { value: "2", label: "USD" },
      // { value: "3", label: "CSE" },
      // { value: "4", label: "ETH" }
      //],
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
  // function that verifies if a string has a given length or not
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
      this.state.organizationfirstState === "has-success" &&
      this.state.organizationlastState === "has-success" &&
      this.state.websiteState === "has-success" &&
      this.state.phonecState === "has-success" &&
      this.state.emailcState === "has-success" &&
      this.state.officeState === "has-success" &&
      this.state.grvicState === "has-success" &&
      this.state.wacocState === "has-success" &&
      this.state.codicState === "has-success" &&
      this.state.citycState === "has-success" &&
      this.state.tradingState === "has-success" &&
      this.state.villagecState === "has-success" &&
      this.state.wardcState === "has-success" &&
      this.state.districtcState === "has-success" &&
      this.state.ctycState === "has-success" &&
      this.state.businessState === "has-success" &&
      this.state.issuedcState === "has-success" &&
      this.state.taxcodeState === "has-success" &&
      this.state.fieldState === "has-success" &&
      this.state.bankaccountcState === "has-success" &&
      this.state.atbankcState === "has-success" &&
      this.state.representativeState === "has-success" &&
      this.state.positionState === "has-success" &&
      this.state.jobState === "has-success" &&
      this.state.nationalityState === "has-success" &&
      this.state.indentitycState === "has-success" &&
      this.state.issuedreState === "has-success" &&
      this.state.phonereState === "has-success" &&
      this.state.emailreState === "has-success" 
    ) {
      return true;
    } else {
      if (this.state.organizationfirstState !== "has-success") {
        this.setState({ organizationfirstState: "has-danger" });
      }
      if (this.state.organizationlastState !== "has-success") {
        this.setState({ organizationlastState: "has-danger" });
      }
      if (this.state.websiteState !== "has-success") {
        this.setState({ websiteState: "has-danger" });
      }
      if (this.state.phonecState !== "has-success") {
        this.setState({ phonecState: "has-danger" });
      }
      if (this.state.emailcState !== "has-success") {
        this.setState({ emailcState: "has-danger" });
      }
      if (this.state.officeState !== "has-success") {
        this.setState({ officeState: "has-danger" });
      }
      if (this.state.grvicState !== "has-success") {
        this.setState({ grvicState: "has-danger" });
      }
      if (this.state.wacocState !== "has-success") {
        this.setState({ wacocState: "has-danger" });
      }
      if (this.state.codicState !== "has-success") {
        this.setState({ codicState: "has-danger" });
      }
      if (this.state.citycState !== "has-success") {
        this.setState({ citycState: "has-danger" });
      }
      if (this.state.tradingState !== "has-success") {
        this.setState({ tradingState: "has-danger" });
      }
      if (this.state.villagecState !== "has-success") {
        this.setState({ villagecState: "has-danger" });
      }
      if (this.state.wardcState !== "has-success") {
        this.setState({ wardcState: "has-danger" });
      }
      if (this.state.districtcState !== "has-success") {
        this.setState({ districtcState: "has-danger" });
      }
      if (this.state.ctycState !== "has-success") {
        this.setState({ ctycState: "has-danger" });
      }
      if (this.state.businessState !== "has-success") {
        this.setState({ businessState: "has-danger" });
      }
      if (this.state.issuedcState !== "has-success") {
        this.setState({ issuedcState: "has-danger" });
      }
      if (this.state.taxcodeState !== "has-success") {
        this.setState({ taxcodeState: "has-danger" });
      }
      if (this.state.fieldState !== "has-success") {
        this.setState({ fieldState: "has-danger" });
      }
      if (this.state.bankaccountcState !== "has-success") {
        this.setState({ bankaccountcState: "has-danger" });
      }
      if (this.state.atbankcState !== "has-success") {
        this.setState({ atbankcState: "has-danger" });
      }
      if (this.state.representativeState !== "has-success") {
        this.setState({ representativeState: "has-danger" });
      }
      if (this.state.positionState !== "has-success") {
        this.setState({ positionState: "has-danger" });
      }
      if (this.state.jobState !== "has-success") {
        this.setState({ jobState: "has-danger" });
      }
      if (this.state.nationalityState !== "has-success") {
        this.setState({ nationalityState: "has-danger" });
      }
      if (this.state.indentitycState !== "has-success") {
        this.setState({ indentitycState: "has-danger" });
      }
      if (this.state.issuedreState !== "has-success") {
        this.setState({ issuedreState: "has-danger" });
      }
      if (this.state.phonereState !== "has-success") {
        this.setState({ phonereState: "has-danger" });
      }
      if (this.state.emailreState !== "has-success") {
        this.setState({ emailreState: "has-danger" });
      }
      return false;
    }
  };
  render() {
    //trạng thái state khi gọi xuống thay vì dùng this.state.optionCountry 
    //const { optionValuevc } = this.state;
    const { optionCtryc } = this.state;
    const { optionCtrc } = this.state;
    const { optionLastemail } = this.state;
    const { optionLastphone } = this.state;
    const { optionZIpcode } = this.state;
    const { optionLastemailre } = this.state;
    const { optionLastphonere } = this.state;

    //console.log(this.state.valuevcSelect);
    console.log(this.state.ctrycSelect);
    console.log(this.state.ctrcSelect);
    console.log(this.state.lastemailSelect);
    console.log(this.state.lastphoneSelect);
    console.log(this.state.zipcodeSelect);
    console.log(this.state.lastemailreSelect);
    console.log(this.state.lastphonereSelect);


    return (
      <>
        <Container>
          <h5 className="info-text">
            Let's start with the basic information (with validation)
          </h5>
          <Row className="justify-content-center">
            {/*<Col sm="4">
            <PictureUpload />
            </Col>*/}
            {/* organizational information */}
            <Col sm="12">
              <label>Organizational Information *</label>
            </Col>
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
                {/* kiem tra co gia tri chua 
                {this.state.lastphoneSelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>}*/}
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
                {/* kiem tra co gia tri chua 
                {this.state.lastemailSelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>}*/}
              </FormGroup>
            </Col>
            {/* Type of registration*/}
            <Container>
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
            <Col sm="12">
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
                {/* kiem tra co gia tri chua 
                {this.state.lastemailSelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>}*/}
              </FormGroup>
            </Col>

            {/*office address*/}
            <Col sm="12">
              <label>Office address *</label>
            </Col>
            <Col sm="4">
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
                {/* kiem tra co gia tri chua
                {this.state.ctrycSelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>} */}
              </FormGroup>
            </Col>
            {/*Trading address*/}
            <Col sm="12">
              <label>Trading address *</label>
            </Col>
            <Col sm="4">
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

            <Col sm="4">
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

            <Col sm="4">
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

            <Col sm="4">
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

            <Col sm="4">
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

            <Col sm="4">
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
                {/* kiem tra co gia tri chua 
                {this.state.ctrcSelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>}*/}
              </FormGroup>
            </Col>

            {/* business register number*/}
            <Col sm="12">
              <label>Business register number *</label>
            </Col>
            <Col sm="4">
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
            <Col sm="4">
              <FormGroup>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "Release date" }}
                />
              </FormGroup>
            </Col>
            <Col sm="4">
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
            <Col sm="6">
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
            <Col sm="6">
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

            <Col sm="6">
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
            <Col sm="6">
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
            <Col sm="12">
            <label>Representative information *</label>
            </Col>
            <Col sm="4">
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
            <Col sm="2">
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

            <Col sm="2">
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

            <Col sm="2">
              <FormGroup>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "Birdthday" }}
                />
              </FormGroup>
            </Col>

            <Col sm="2">
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

            <Col sm="2">
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
                {/* kiem tra co gia tri chua 
                {this.state.lastphoneSelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>}*/}
              </FormGroup>
            </Col>

            <Col sm="4">
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

            <Col sm="3">
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
            <Col sm="3">
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
                {/* kiem tra co gia tri chua 
                {this.state.lastemailSelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>}*/}
              </FormGroup>
            </Col>

            {/* identity card */}
            <Col sm="12">
              <label>Identity card *</label>
            </Col>
            <Col sm="4">
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
            <Col sm="4">
              <FormGroup>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "Release date" }}
                />
              </FormGroup>
            </Col>
            <Col sm="4">
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
            <Col sm="12">
              <Label>Add field</Label>
            </Col>
            <Form action="/" className="form-horizontal">
              <Row>
                <Col className="checkbox-radios" sm="3">
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />
                      School profile
                          </Label>
                  </FormGroup>
                </Col>
                <Col className="checkbox-radios" sm="3">
                  <FormGroup check>
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className="form-check-sign" />
                      Car property
                          </Label>
                  </FormGroup>
                </Col>
                <Col className="checkbox-radios" sm="3">
                  <FormGroup check>
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className="form-check-sign" />
                      Housing information
                          </Label>
                  </FormGroup>
                </Col>
                <Col className="checkbox-radios" sm="3">
                  <FormGroup check>
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className="form-check-sign" />
                      Other information
                          </Label>
                  </FormGroup>
                </Col>
              </Row>
            </Form>


            {/*<Col sm="12">
              <FormGroup>
                <Select
                  className="react-select"
                  classNamePrefix="react-select"
                  // country validation
                  name="valuevc"
                  value={this.state.valueSelect}
                  onChange={value =>
                    this.setState({ valuevcSelect: value })
                  }
                  options={optionValuevc}
                  placeholder="Single Select"
                />
                kiem tra co gia tri chua 
                {this.state.valuevcSelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>}
              </FormGroup>
            </Col>
           <Col className="mt-3" lg="10">
              <InputGroup
                className={classnames(this.state.emailState, {
                  "input-group-focus": this.state.emailFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-send" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="email"
                  placeholder="Email (required)"
                  type="email"
                  onChange={e => this.change(e, "email", "email")}
                  onFocus={e => this.setState({ emailFocus: true })}
                  onBlur={e => this.setState({ emailFocus: false })}
                />
                {this.state.emailState === "has-danger" ? (
                  <label className="error">This field is required.</label>
                ) : null}
              </InputGroup>
                </Col>*/}
          </Row>
        </Container>
      </>
    );
  }
}

export default Wizard;
