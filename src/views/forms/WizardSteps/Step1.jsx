import React from "react";
// react plugin used to create DropdownMenu for selecting items
//import Select from "react-select";
import Select from "react-select";
import Datetime from 'react-datetime';
// reactstrap components
import { FormGroup, Input, Row, Col, Container  } from "reactstrap";

import "react-tabs/style/react-tabs.css";
import Imglogo from "components/CustomUpload/Imglogo.jsx";
class Wizard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      // trademark:"",

      // trademarkState:"",
      sectornameSelect:[],
      optionSectorname: [
        { value: "1", label: "Product" },
        { value: "2", label: "Service" },
      ],
    };
  }
  // verifyLength = (value, length) => {
  //   if(value.length >= length) {
  //     return true;
  //   } return false;
  // };
  // change = (event, stateName, type, stateNameEqualTo, maxValue) => {
  //   switch (type) {
  //     case "length":
  //     if(this.verifyLength(event.target.value, stateNameEqualTo)) {
  //       this.setState({ [stateName + "State"]: "has-success" });
  //     } else {
  //       this.setState({ [stateName + "State"]: "has-danger" });
  //     } 
  //     break;
  //     default:
  //     break;
  //   }
  //   this.setState({ [stateName]: event.target.value });
  // };
  // isValidated = () => {
  //   if ( 
  //     this.state.trademark === "has-success"
  //   ) {
  //     return true;
  //   } else {
  //     if (this.state.trademarkState !== "has-sucess") {
  //       this.setState({ trademarkState: "has-danger" });
  //     }
  //     return false;
  //   }
  // };


  render() {
    console.log(this.state.sectornameSelect);
    const { optionSectorname } = this.state;
    // const { optionChoosebank } = this.state;
    console.log(this.state.choosebankSelect);
    return (
      <>
        <Container>
          <Row className="justify-content-center">
            <Col sm="6">
              <FormGroup className="text-center">
                <Imglogo />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <label>Trade mark:</label>
                <Input type="text"  placeholder="Kym Dan" />
              </FormGroup>
              <FormGroup>
                <label>Sector name</label>
                <Select
                    className="react-select"
                    classNamePrefix="react-select"
                    name="sectorname"
                    value={this.state.sectornameSelect}
                    onChange={value =>
                      this.setState({ sectornameSelect: value })
                    }
                    options={optionSectorname}
                    placeholder="Choose Sector Name"
                    //isDisabled
                />
              </FormGroup>
              <FormGroup>
                <label>Product or Service of (name of...)</label>
                <Input type="text" placeholder="Kymdan wooden bed" />
              </FormGroup>
              <FormGroup>
                <label>Retail Price</label>
                <Input type="text" placeholder="300" />
              </FormGroup>
            </Col>
          </Row>
          <Row >
            <Col sm="3">
              <FormGroup>
                <label>Name of product or service</label>
                <Input type="text" placeholder="KYMDAN DELUXE" />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup>
                <label>Code of product or service</label>
                <Input type="text" placeholder="KYMDAN745789" />
              </FormGroup>
            </Col>
            <Col sm="2">
              <FormGroup>
                <label>Product code</label>
                <Select
                  className="react-select primary"
                  classNamePrefix="react-select"
                  name="singleSelect"
                  value={this.state.singleSelect}
                  onChange={value =>
                    this.setState({ singleSelect: value })
                  }
                  options={[
                    {
                      value: "1",
                      label: "10%",
                      isDisabled: true
                    },
                    { value: "2", label: "15%" },
                    { value: "3", label: "25%" }
                  ]}
                  placeholder="10%"
                />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Amount of promotion vouchers</label>
                <Input disabled type="text" className="text-left" placeholder="01" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <label>Promotion address</label>
                <Input type="text" placeholder="09 Bis VoVanTan Distress 3 TPHCM Vietnam" />
              </FormGroup>
            </Col>
          </Row>

          <Row >
            <Col sm="4">
              <FormGroup>
                <label>Name of promotor</label>
                <Input type="text" placeholder="David Jhon" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Promotion or organization or person</label>
                <Input type="text" placeholder="KymDan Global" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Zip/Code</label>
                <Select
                  className="react-select primary"
                  classNamePrefix="react-select"
                  name="singleSelect"
                  value={this.state.singleSelect}
                  onChange={value =>
                    this.setState({ singleSelect: value })
                  }
                  options={[
                    {
                      value: "1",
                      label: "7000",
                      isDisabled: true
                    },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                    { value: "4", label: "4" },
                    { value: "5", label: "5" }
                  ]}
                  placeholder="7000"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="6" sm="6">
              <FormGroup>
                <label>Date Begin</label>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "Release date" }}
                />
              </FormGroup>
            </Col>
            <Col lg="6" md="6" sm="6">
              <FormGroup>
                <label>Time Begin</label>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "Release date" }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="6" sm="6">
              <FormGroup>
                <label>Date End</label>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "Release date" }}
                />
              </FormGroup>
            </Col>
            <Col lg="6" md="6" sm="6">
              <FormGroup>
                <label>Time End</label>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "Release date" }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row >
            <Col sm="8">
              <FormGroup>
                <label>Commercial market</label>
                <Input type="text" placeholder="Jhon Master" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Total</label>
                <Input disabled type="text" placeholder="300000" />
              </FormGroup>
            </Col>
          </Row>
          <Row >
            <Col sm="12">
              <FormGroup>
                <label>Product annotation</label>
                <textarea className="form-control"  rows="8" placeholder="Natural Latex that is fire retardant and insect retardant. Featuring an optimum elasticity that is beneficial in supporting the spine.
                  Combining modern technology and KYMDAN's traditional trade secrets, all KYMDAN mattresses are crafted from natural latex in the form of foam (sponge, mousse). Embodying 15 Outstanding features, KYMDAN mattresses have a unique quality that no other similar product (globally) has achieved.
                  "/>  
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Wizard;
