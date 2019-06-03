import React from "react";
import ReactWizard from "react-bootstrap-wizard";
import {
 Button,
  Card,
  CardBody,
  Row,
  Col,
  Modal,
  Container,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";
//import Switch from "react-bootstrap-switch";
import Step1 from "./WizardSteps/Step1.jsx";
import Step5 from "./WizardSteps/Step5.jsx";

import ModalVndpmt from "../tables/ModalVndpmt";
import ModalCsepmt from "../tables/ModalCsepmt";
import ModalPaypalpmt from "../tables/ModalPaypalpmt";
import ModalBtcpmt from "../tables/ModalBtcpmt";
import "react-tabs/style/react-tabs.css";
var steps = [
  {
    stepName: "step1",
    stepIcon: "nc-icon nc-pin-3",
    component: Step1
  },
  {
    stepName: "step2",
    stepIcon: "nc-icon nc-pin-3",
    component: Step5
  },
];
class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 15,
      vnd:1,
      cse:2,
      horizontalTabs: "vnd",
      verticalTabs: "info",
      pageTabs: "vndPages",
      openedCollapses: ["collapseOne", "collapse1"],
    };
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
  toggleModalMini = () => {
    this.setState({
      modalMini: !this.state.modalMini
    });
  };
  statisticaltables = () => {
    this.props.history.push('/user/statistical-tables');
  };
  wallet = () => {
    this.setState({
       vnd:1,
       cse:2,
    });
  };
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
    return (
      <>
        <div className="content">
          <Col className="mr-auto ml-auto" md="10">
            <ReactWizard
              steps={steps}
              navSteps
              validate
              title="Infomation of product or service"
              description="This information will let us know more about you."
              headerTextCenter
              finishButtonClick={this.toggleModalpayment}
              finishButtonClasses="btn-wd"
              nextButtonClasses="btn-wd"
              previousButtonClasses="btn-wd"
            />
          </Col>
          {/*Modal for Payment*/}
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
        </div>
      </>
    );
  }
}
export default Single;
