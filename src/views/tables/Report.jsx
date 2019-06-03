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
  Table,
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
// const maupayment = {color: '#DCDCDC'}
// const mausuccess = {color: 'success'}
class Report extends React.Component {
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
      data: [
        { name: "abc", age: "17", play: false, payment: false, },
        { name: "abdc", age: "19", play: true, payment: true, },
      ],
    };
  }
  pauseplay = (index) => {
    const datass = Object.assign([], this.state.data);
    datass[index].play = !this.state.data[index].play;
    // console.log(datass);
    console.log("thiss state", this.state.data[index]);
    this.setState({
      data: datass,
    });
    // console.log("thiss state", this.state.data);
  }
  setstatus = (index) => {
    const status = Object.assign([], this.state.data);
    status[index].payment = !this.state.data[index].payment;
    console.log("status", this.state.data[index]);
    this.setState({
      data: status,
    });
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

    const listItems = this.state.data.map((item, index) =>

      <tr key={index}>
        <td className="text-center">1</td>
        <td className="text-center">{item.age}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">
          <img style={IconCoin}
            className="rounded"
            src={CSE1} alt="CSECoin1"></img>
        </td>
        <td className="text-center">
          10/01/2019 <br />
          10:01
        </td>
        <td className="text-center">
          10/07/2019 <br />
          23:04
        </td>
        <td className="text-center">10</td>
        <td className="text-center">7</td>
        <td className="text-center">7</td>
        <td className="text-center">3</td>
        <td className="text-center">
          <Button
            className="btn-icon"
            color="info"
            id="tooltip264453216"
            size="sm"
            type="button"
            onClick={this.pauseplay.bind(this, index)}
          >

            {this.state.data[index].play ?
              <i className="nc-icon nc-button-play" /> :
              <i className="nc-icon nc-button-pause" />}

          </Button>{" "}
          <UncontrolledTooltip
            delay={0}
            target="tooltip264453216"
          >
            Pause/Play
      </UncontrolledTooltip>
          <Button
            className="btn-icon"
            color="success"
            id="tooltip366246651"
            size="sm"
            type="button"
          >
            <i className="fa fa-edit" />
          </Button>{" "}
          <UncontrolledTooltip
            delay={0}
            target="tooltip366246651"
          >
            Edit
      </UncontrolledTooltip>
          <Button
            className="btn-icon"
            color="danger"
            id="tooltip476609793"
            size="sm"
            type="button"
          >
            <i className="fa fa-times" />
          </Button>{" "}
          <UncontrolledTooltip
            delay={0}
            target="tooltip476609793"
          >
            Delete
      </UncontrolledTooltip>
        </td>
        <td className="text-center">
          <Button className="btn-round"
            color={this.state.data[index].payment ? "payment" : "success"}
            size="sm"
            onClick={this.toggleModalpayment}
          //{this.setstatus.bind(this, index)}
          >
            {this.state.data[index].payment ? "payment" : "success"}
          </Button>
        </td>
      </tr>
    );
    return (
      <>
        <div className="content Statistical">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Table responsive >
                    <thead className="text-center">
                      <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">trademark</th>
                        <th className="text-center">Image</th>
                        <th className="text-center">Time-Start</th>
                        <th className="text-center">Time-End</th>
                        <th className="text-center">Used</th>
                        <th className="text-center">Amount</th>
                        <th className="text-center">Residual</th>
                        <th className="text-center">Total</th>
                        <th className="text-center">Actions</th>
                        <th className="text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listItems}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
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

export default Report;