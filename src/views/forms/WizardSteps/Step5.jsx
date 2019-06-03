import React from "react";
// react plugin used to create DropdownMenu for selecting items
//import Select from "react-select";
// //import Datetime from 'react-datetime';
// import Select from "react-select";

// reactstrap components
import { FormGroup, Input, Button, Row, Col, Container, } from "reactstrap";
import QRCode from "qrcode.react";
import "react-tabs/style/react-tabs.css";

class Wizard extends React.Component {
  toggleModalatm = () => {
    this.setState({
      modalatm: !this.state.modalatm
    });
  }
  toggleModalpaycash = () => {
    this.setState({
      modalpaycash: !this.state.modalpaycash
    });
  }
  toggleModalcse = () => {
    this.setState({
      modalcse: !this.state.modalcse
    });
  }
  toggleModalbtc = () => {
    this.setState({
      modalbtc: !this.state.modalbtc
    })
  }
  toggleModalqrcode = () => {
    this.setState({
      modalqrcode: !this.state.modalqrcode
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      country: "",
      Province: "",
      Company: "",
      amount: "",
      lotcode: "",
      areacodeState: "",
      ProvincecodeState: "",
      emailState: "",
      modalatm: false,
      modalpaycash: false,
      modalcse: false,
      modalbtc: false,
      modalqrcode: false,
      ListCse: [],
      username: "",
      password: "",
      alert_message: "",
      visible: true,
      choosebankSelect: "",
      optionChoosebank: [
        {
          value: "",
          label: "Single Option",
          isDisabled: true
        },
        { value: "1", label: "Vietcombank" },
        { value: "2", label: "Vietinbank" },
        { value: "3", label: "Saccombank" },
        { value: "4", label: "VPBank" },
        { value: "5", label: "Agribank" },
        { value: "6", label: "ABbank" },

      ],
    };

  }
  login = () => {
    this.props.history.push('/auth/logins');
  };

  render() {
    // const { optionChoosebank } = this.state;
    console.log(this.state.choosebankSelect);
    return (
      <>
        <Container>
          <Row className="justify-content-center">

            <Col sm="7">
              <FormGroup className="text-center">
                <QRCode value='asdas' size={230} />
                <h5 className="text-center">84-075-A001-SV00566</h5>
                <label>Share:</label>
                <Button className="btn-icon btn-neutral btn btn-google"><i className="fa fa-google-plus" /></Button>
                <Button className="btn-icon btn-neutral btn btn-twitter"><i className="fa fa-twitter" /></Button>
                <Button className="btn-icon btn-neutral btn btn-facebook"><i className="fa fa-facebook-square" /></Button>
                <Button className="btn-icon btn-neutral btn btn-linkedin"><i className="fa fa-linkedin" /></Button>
                <Button className="btn-info"><i className="nc-icon nc-cloud-download-93" /></Button>
              </FormGroup>
            </Col>
            <Col sm="5">
              <FormGroup>
                <label>Trade mark:</label>
                <Input type="text" disabled placeholder="KymDan" />
              </FormGroup>
              <FormGroup>
                <label>Name of product or service:</label>
                <Input type="text" disabled placeholder="KymDan Deluxe" />
              </FormGroup>
              <FormGroup>
                <label>Code of product or service:</label>
                <Input type="text" disabled placeholder="QR-A1235-58362" />
              </FormGroup>
              <FormGroup>
                <label>Amount of promotion vouchers:</label>
                <Input type="text" disabled placeholder="1" />
              </FormGroup>
              <FormGroup>
                <label>Voucher worth:</label>
                <Input type="text" disabled placeholder="84-075-A001-SV00566" />
              </FormGroup>

            </Col>
          </Row>

          <Row >
            <Col sm="4">
              <FormGroup>
                <label>Retail price</label>
                <Input disabled type="text" placeholder="300" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Percent of promotion (%)</label>
                <Input disabled type="text" placeholder="10%" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Amount</label>
                <Input disabled type="text" placeholder="100 USD" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="2">
              <label>Payment*</label>
            </Col>
            <Col sm="2">
              <input defaultValue="option1"
                id="exampleRadios11"
                name="exampleRadioz"
                type="radio" />
              VND <span className="form-check-sign" />
            </Col>
            <Col sm="2">
              <input defaultValue="option1"
                id="exampleRadios11"
                name="exampleRadioz"
                type="radio" />
              CSE <span className="form-check-sign" />
            </Col>
            <Col sm="2">
              <input defaultValue="option1"
                id="exampleRadios11"
                name="exampleRadioz"
                type="radio" />
              Paypal <span className="form-check-sign" />
            </Col>
            <Col sm="2">
              <input defaultValue="option1"
                id="exampleRadios11"
                name="exampleRadioz"
                type="radio" />
              BTC <span className="form-check-sign" />
            </Col>
            <Col sm="12">
              <FormGroup>
                <label>Email *:</label>
                <Input type="text" placeholder="goldennet@gmail.com" />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Wizard;
