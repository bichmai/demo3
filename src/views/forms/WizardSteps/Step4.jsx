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
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      paddress: "",
      grvi: "",
      waco: "",
      codi: "",
      city: "",
      taddress: "",
      village: "",
      ward: "",
      district: "",
      cty: "",
      indentity: "",
      issued: "",
      pertaxcode: "",
      currentjob: "",
      bankaccount: "",
      atbank: "",
      //email: "",
      firstnameState: "",
      lastnameState: "",
      phoneState: "",
      emailState: "",
      paddressState: "",
      grviState: "",
      wacoState: "",
      codiState: "",
      cityState: "",
      taddressState: "",
      villageState: "",
      wardState: "",
      districtState: "",
      ctyState: "",
      indentityState: "",
      issuedState: "",
      pertaxcodeState: "",
      currentjobState: "",
      bankaccountState: "",
      atbankState: "",
      //state value select for option
      lastphoneSelect: "",
      lastemailSelect: "",
      zipcodeSelect:"",
      //valuevcSelect: "",
      ctrySelect: "",
      ctrSelect: "",

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
      this.state.firstnameState === "has-success" &&
      this.state.lastnameState === "has-success" &&
      this.state.phoneState === "has-success" &&
      this.state.emailState === "has-success" &&
      this.state.paddressState === "has-success" &&
      this.state.grviState === "has-success" &&
      this.state.wacoState === "has-success" &&
      this.state.codiState === "has-success" &&
      this.state.cityState === "has-success" &&
      this.state.taddressState === "has-success" &&
      this.state.villageState === "has-success" &&
      this.state.wardState === "has-success" &&
      this.state.districtState === "has-success" &&
      this.state.ctyState === "has-success" &&
      this.state.indentityState === "has-success" &&
      this.state.issuedState === "has-success" &&
      this.state.pertaxcodeState === "has-success" &&
      this.state.currentjobState === "has-success" &&
      this.state.bankaccountState === "has-success" &&
      this.state.atbankState === "has-success"


    ) {
      return true;
    } else {
      if (this.state.firstnameState !== "has-success") {
        this.setState({ firstnameState: "has-danger" });
      }
      if (this.state.lastnameState !== "has-success") {
        this.setState({ lastnameState: "has-danger" });
      }
      if (this.state.phoneState !== "has-success") {
        this.setState({ phoneState: "has-danger" });
      }
      if (this.state.emailState !== "has-success") {
        this.setState({ emailState: "has-danger" });
      }
      if (this.state.paddressState !== "has-success") {
        this.setState({ paddressState: "has-danger" });
      }
      if (this.state.grviState !== "has-success") {
        this.setState({ grviState: "has-danger" });
      }
      if (this.state.wacoState !== "has-success") {
        this.setState({ wacoState: "has-danger" });
      }
      if (this.state.codiState !== "has-success") {
        this.setState({ codiState: "has-danger" });
      }
      if (this.state.cityState !== "has-success") {
        this.setState({ cityState: "has-danger" });
      }
      if (this.state.taddressState !== "has-success") {
        this.setState({ taddressState: "has-danger" });
      }
      if (this.state.villageState !== "has-success") {
        this.setState({ villageState: "has-danger" });
      }
      if (this.state.wardState !== "has-success") {
        this.setState({ wardState: "has-danger" });
      }
      if (this.state.districtState !== "has-success") {
        this.setState({ districtState: "has-danger" });
      }
      if (this.state.ctyState !== "has-success") {
        this.setState({ ctyState: "has-danger" });
      }
      if (this.state.indentityState !== "has-success") {
        this.setState({ indentityState: "has-danger" });
      }
      if (this.state.issuedState !== "has-success") {
        this.setState({ issuedState: "has-danger" });
      }
      if (this.state.pertaxcodeState !== "has-success") {
        this.setState({ pertaxcodeState: "has-danger" });
      }
      if (this.state.currentjobState !== "has-success") {
        this.setState({ currentjobState: "has-danger" });
      }
      if (this.state.bankaccountState !== "has-success") {
        this.setState({ bankaccountState: "has-danger" });
      }
      if (this.state.atbankState !== "has-success") {
        this.setState({ atbankState: "has-danger" });
      }
      return false;
    }
  };
  render() {
    //trạng thái state khi gọi xuống thay vì dùng this.state.optionCountry 
    //const { optionValuevc } = this.state;
    const { optionCtry } = this.state;
    const { optionCtr } = this.state;
    const { optionZipcode } = this.state;
    const { optionLastemail } = this.state;
    const { optionLastphone } = this.state;


    //console.log(this.state.valuevcSelect);
    console.log(this.state.ctrySelect);
    console.log(this.state.ctrSelect);
    console.log(this.state.zipcodeSelect);
    console.log(this.state.lastemailSelect);
    console.log(this.state.lastphoneSelect);

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
            {/* Customer Information */}
            <Col sm="12">
              <label>Customer Information *</label>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Input
                  name="firstname"
                  placeholder="First Name *"
                  type="text"
                  onChange={e => this.change(e, "firstname", "length", 1)}
                  onFocus={e => this.setState({ firstnameFocus: true })}
                  onBlur={e => this.setState({ firstnameFocus: false })}
                />
                {this.state.firstnameState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Input
                  name="lastname"
                  placeholder="Last name *"
                  type="text"
                  onChange={e => this.change(e, "lastname", "length", 1)}
                  onFocus={e => this.setState({ lastnameFocus: true })}
                  onBlur={e => this.setState({ lastnameFocus: false })}
                />
                {this.state.lastnameState === "has-danger" ? (
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
                  name="lastphone"
                  value={this.state.lastphoneSelect}
                  onChange={value =>
                    this.setState({ lastphoneSelect: value })
                  }
                  options={optionLastphone}
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
                  name="phone"
                  placeholder="Mobile Phone number *"
                  type="text"
                  onChange={e => this.change(e, "phone", "length", 1)}
                  onFocus={e => this.setState({ phoneFocus: true })}
                  onBlur={e => this.setState({ phoneFocus: false })}
                />
                {this.state.phoneState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>

            <Col sm="3">
              <FormGroup>
                <Input
                  name="email"
                  placeholder="E-mail *"
                  type="text"
                  onChange={e => this.change(e, "email", "length", 1)}
                  onFocus={e => this.setState({ emailFocus: true })}
                  onBlur={e => this.setState({ emailFocus: false })}
                />
                {this.state.emailState === "has-danger" ? (
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
            {/* Sex */}
            <Container>
              <Row >
                <Col sm="2">
                  <label>Sex *</label>
                </Col>
                <Col sm="2">
                  <input defaultValue="option1"
                    id="exampleRadios11"
                    name="exampleRadioz"
                    type="radio" />
                  Male <span className="form-check-sign" />
                </Col>
                <Col sm="2">
                  <input defaultValue="option1"
                    id="exampleRadios11"
                    name="exampleRadioz"
                    type="radio" />
                  Female <span className="form-check-sign" />
                </Col>
              
            
            <Col sm="6">
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
                  options={optionZipcode}
                  placeholder="Zip/Postal Code"
                />
                {/* kiem tra co gia tri chua 
                {this.state.zipcodeSelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>}*/}
              </FormGroup>
            </Col>
            </Row>
            </Container>

            {/*Permanent address*/}
            <Col sm="12">
              <label>Permanent address *</label>
            </Col>
            <Col sm="2">
              <FormGroup>
                <Input
                  name="paddress"
                  placeholder="Permanent"
                  type="text"
                  onChange={e => this.change(e, "paddress", "length", 1)}
                  onFocus={e => this.setState({ paddressFocus: true })}
                  onBlur={e => this.setState({ paddressFocus: false })}
                />
                {this.state.paddressState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>

            <Col sm="2">
              <FormGroup>
                <Input
                  name="grvi"
                  placeholder="Village"
                  type="text"
                  onChange={e => this.change(e, "grvi", "length", 1)}
                  onFocus={e => this.setState({ grviFocus: true })}
                  onBlur={e => this.setState({ grviFocus: false })}
                />
                {this.state.grviState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>

            <Col sm="2">
              <FormGroup>
                <Input
                  name="waco"
                  placeholder="Ward"
                  type="text"
                  onChange={e => this.change(e, "waco", "length", 1)}
                  onFocus={e => this.setState({ wacoFocus: true })}
                  onBlur={e => this.setState({ wacoFocus: false })}
                />
                {this.state.wacoState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>

            <Col sm="2">
              <FormGroup>
                <Input
                  name="codi"
                  placeholder="District"
                  type="text"
                  onChange={e => this.change(e, "codi", "length", 1)}
                  onFocus={e => this.setState({ codiFocus: true })}
                  onBlur={e => this.setState({ codiFocus: false })}
                />
                {this.state.codiState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>

            <Col sm="2">
              <FormGroup>
                <Input
                  name="city"
                  placeholder="City"
                  type="text"
                  onChange={e => this.change(e, "city", "length", 1)}
                  onFocus={e => this.setState({ cityFocus: true })}
                  onBlur={e => this.setState({ cityFocus: false })}
                />
                {this.state.cityState === "has-danger" ? (
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
                  name="ctry"
                  value={this.state.ctrySelect}
                  onChange={value =>
                    this.setState({ ctrySelect: value })
                  }
                  options={optionCtry}
                  placeholder="Country"
                />
                {/* kiem tra co gia tri chua
                {this.state.ctrySelect ? (
                  null
                ) : <label className="error text-danger">This field is required.</label>} */}
              </FormGroup>
            </Col>
            {/*Tabernacle address*/}
            <Col sm="12">
              <label>Tabernacle address *</label>
            </Col>
            <Col sm="2">
              <FormGroup>
                <Input
                  name="taddress"
                  placeholder="Tabernacle"
                  type="text"
                  onChange={e => this.change(e, "taddress", "length", 1)}
                  onFocus={e => this.setState({ taddressFocus: true })}
                  onBlur={e => this.setState({ taddressFocus: false })}
                />
                {this.state.taddressState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>

            <Col sm="2">
              <FormGroup>
                <Input
                  name="village"
                  placeholder="Village"
                  type="text"
                  onChange={e => this.change(e, "village", "length", 1)}
                  onFocus={e => this.setState({ villageFocus: true })}
                  onBlur={e => this.setState({ villageFocus: false })}
                />
                {this.state.villageState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>

            <Col sm="2">
              <FormGroup>
                <Input
                  name="ward"
                  placeholder="Ward"
                  type="text"
                  onChange={e => this.change(e, "ward", "length", 1)}
                  onFocus={e => this.setState({ wardFocus: true })}
                  onBlur={e => this.setState({ wardFocus: false })}
                />
                {this.state.wardState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>

            <Col sm="2">
              <FormGroup>
                <Input
                  name="district"
                  placeholder="District"
                  type="text"
                  onChange={e => this.change(e, "district", "length", 1)}
                  onFocus={e => this.setState({ districtFocus: true })}
                  onBlur={e => this.setState({ districtFocus: false })}
                />
                {this.state.districtState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>

            <Col sm="2">
              <FormGroup>
                <Input
                  name="cty"
                  placeholder="City"
                  type="text"
                  onChange={e => this.change(e, "cty", "length", 1)}
                  onFocus={e => this.setState({ ctyFocus: true })}
                  onBlur={e => this.setState({ ctyFocus: false })}
                />
                {this.state.ctyState === "has-danger" ? (
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
                  name="ctr"
                  value={this.state.ctrSelect}
                  onChange={value =>
                    this.setState({ ctrSelect: value })
                  }
                  options={optionCtr}
                  placeholder="Country"
                />
                {/* kiem tra co gia tri chua 
                {this.state.ctrySelect ? (
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
                  name="indentity"
                  placeholder="Identity"
                  type="text"
                  onChange={e => this.change(e, "indentity", "length", 1)}
                  onFocus={e => this.setState({ indentityFocus: true })}
                  onBlur={e => this.setState({ indentityFocus: false })}
                />
                {this.state.indentityState === "has-danger" ? (
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
                  name="issued"
                  placeholder="Issued by"
                  type="text"
                  onChange={e => this.change(e, "issued", "length", 1)}
                  onFocus={e => this.setState({ issuedFocus: true })}
                  onBlur={e => this.setState({ issuedFocus: false })}
                />
                {this.state.issuedState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>
            {/* Personal tax code */}
            <Col sm="6">
              <label>Personal tax code *</label>
              <FormGroup>
                <Input
                  name="pertaxcode"
                  placeholder="Personal tax code"
                  type="text"
                  onChange={e => this.change(e, "pertaxcode", "length", 1)}
                  onFocus={e => this.setState({ pertaxcodeFocus: true })}
                  onBlur={e => this.setState({ pertaxcodeFocus: false })}
                />
                {this.state.pertaxcodeState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>
            {/* current job */}
            <Col sm="6">
              <label>Current job *</label>
              <FormGroup>
                <Input
                  name="currentjob"
                  placeholder="Current job"
                  type="text"
                  onChange={e => this.change(e, "currentjob", "length", 1)}
                  onFocus={e => this.setState({ currentjobFocus: true })}
                  onBlur={e => this.setState({ currentjobFocus: false })}
                />
                {this.state.currentjobState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>
            {/* Bank account number */}

            <Col sm="6">
              <label>Bank account number *</label>
              <FormGroup>
                <Input
                  name="bankaccount"
                  placeholder="Bank account number"
                  type="text"
                  onChange={e => this.change(e, "bankaccount", "length", 1)}
                  onFocus={e => this.setState({ bankaccountFocus: true })}
                  onBlur={e => this.setState({ bankaccountFocus: false })}
                />
                {this.state.bankaccountState === "has-danger" ? (
                  <label className="error text-danger">This field is required.</label>
                ) : null}
              </FormGroup>
            </Col>
            {/* At the bank*/}
            <Col sm="6">
              <label>At the bank *</label>
              <FormGroup>
                <Input
                  name="atbank"
                  placeholder="At the bank"
                  type="text"
                  onChange={e => this.change(e, "atbank", "length", 1)}
                  onFocus={e => this.setState({ atbankFocus: true })}
                  onBlur={e => this.setState({ atbankFocus: false })}
                />
                {this.state.atbankState === "has-danger" ? (
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
