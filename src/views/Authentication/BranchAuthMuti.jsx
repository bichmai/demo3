import React from "react";
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";
//import Datetime from 'react-datetime';
// reactstrap components
import {
  Col,// Input, Button, Modal, ModalHeader, ModalBody,
   Container, Row
}
  from "reactstrap";

// wizard steps 
// import Step6 from "../forms/WizardSteps/Step6.jsx";
import Step5 from "../forms/WizardSteps/Step5.jsx";
import Step2 from "../forms//WizardSteps/Step2.jsx";
var steps = [
  // {
  //   stepName: "Step one",
  //   stepIcon: "nc-icon nc-touch-id",
  //   component: Step6
  // },
  {
    stepName: "Step two",
    stepIcon: "nc-icon nc-pin-3",
    component: Step2
  },
  {
    stepName: "Step three",
    stepIcon: "nc-icon nc-pin-3",
    component: Step5
  }
];

class BranchAuthMuti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 15,
    };
  }
  toggleModalPayment = () => {
    this.setState({
      modalPayment: !this.state.modalPayment
    });
  }
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  login = () => {
    this.props.history.push('/auth/login');
  };
  render() {
    return (
      <>
        <div className="login-page">
          <Container>
            <Row>
              <Col md="12">
                <ReactWizard
                  steps={steps}
                  navSteps
                  validate
                  title="Build Your QR Code Muti"
                  description="This information will let us know more about you."
                  headerTextCenter
                  finishButtonClick={this.login}
                  finishButtonClasses="btn-wd btn-md"
                  previousButtonClasses="btn-wd"
                  nextButtonClasses="btn-wd"
                />
              </Col>
              {/*<Modal isOpen={this.state.modalPayment} toggle={this.toggleModalPayment} size="lg">
                <ModalHeader toggle={this.toggle} className="text-left">Visa / Master Card
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleModalPayment}>
                    <span aria-hidden="true">×</span>
                  </button>
                </ModalHeader>
                <ModalBody >
                  <Container fluid>
                    <Row>
                      <Col md="12">
                        <p className="text-left">Name</p>
                        <Input placeholder="David Nguyen" name="name" type="text" />
                      </Col>
                      <Col md="12">
                        <p className="text-left">Visa / Master card</p>
                        <Input placeholder="132432423sdasd" name="sothe" type="text" className="text-danger" />
                      </Col>
                      <Col md="6">
                        <p className="text-muted">Date expired</p>
                        <Datetime
                          timeFormat={false}
                          inputProps={{ placeholder: "Choose day" }}
                        />
                      </Col>
                      <Col md="6">
                        <p className="text-muted">CVV / CVC</p>
                        <Input placeholder="087" name="3number" type="text" />
                      </Col>
                      <Col md="12">
                        {/* <Button aria-hidden="true" data-dismiss="modal" aria-label="Close" onClick={this.toggleModalPayment}>
                      Cancel
                    </Button>
                        <Button className="pull-right"  onClick={this.login} >
                          Finish
                    </Button>
                      </Col>
                    </Row>
                  </Container>
                </ModalBody>
              </Modal>*/}
            </Row>
          </Container>

          <div
            className="full-page-background"
            style={{
              backgroundImage: `url(${require("assets/img/bg/login.jpg")})`,
              position: "absolute"
            }}
          />
        </div>
      </>
    );
  }
}

export default BranchAuthMuti;
