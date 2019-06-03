import React, { Component } from "react";
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";
// reactstrap components
import {
  Col, Container, Row
} from "reactstrap";

// wizard steps 
// import Step4 from "../forms/WizardSteps/Step4";
import Step1 from "../forms//WizardSteps/Step1.jsx";
import Step5 from "../forms/WizardSteps/Step5";
var steps = [
  // {
  //   stepName: "step1",
  //   stepIcon: "nc-icon nc-single-02",
  //   component: Step4
  // },
  {
    stepName: "step2",
    stepIcon: "nc-icon nc-pin-3",
    component: Step1
  },
  {
    stepName: "step3",
    stepIcon: "nc-icon nc-pin-3",
    component: Step5
  },
];
class BranchAuth extends Component {
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
    console.log(this.props);

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
                  title="Build Your E-Voucher QR Code"
                  description="This information will let us know more about you."
                  headerTextCenter
                  finishButtonClick={this.login}
                  finishButtonClasses="btn-wd btn-md"
                  previousButtonClasses="btn-wd"
                  nextButtonClasses="btn-wd"
                />
              </Col>
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

export default BranchAuth;
