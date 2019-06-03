import React from "react";
//import classnames from "classnames";
import "react-tabs/style/react-tabs.css";
import ModalVndpmt from "./ModalVndpmt";
import ModalCsepmt from "./ModalCsepmt";
import ModalPaypalpmt from "./ModalPaypalpmt";
import ModalBtcpmt from "./ModalBtcpmt";
// reactstrap components
import {
  Button, UncontrolledTooltip,
  Card, CardBody,
  Container, Row, Col,
  Modal,
  Nav,
  TabContent, TabPane,
} from "reactstrap";
import CSE1 from "../../assets/img/food/tomhumdat.jpg";
const IconCoin = {
  width: "40px", height: "40px",
  margin: "4px 2px 2px 19px",
  marginLeft: "4px", marginRight: "5px", marginTop: "5px", marginBottom: "2px",
}
class ModalPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vnd: [],
      cse: [],
      paypal: [],
      btc: [],
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
      </>
    );
  }
}

export default ModalPayment;