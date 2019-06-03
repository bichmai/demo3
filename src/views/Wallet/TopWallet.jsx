import React from "react";
import {
  Card, CardBody, 
  Container, Row, Col,
} from "reactstrap";
import "react-tabs/style/react-tabs.css";
import ModalVnd from "./ModalVnd";
import ModalCse from "./ModalCse";
import ModalPaypal from "./ModalPaypal";
import ModalBtc from "./ModalBtc";
//Img
import CSE1 from "../../assets/img/Coin/CSECoin1.jpg";
import OWF1 from "../../assets/img/Coin/OWIFICoin1.jpg";
import BitCoin from "../../assets/img/Coin/bitcoin.png";
// import QRCode from "../../assets/img/icon/QRCode.png";
const IconCoin = {
  width: "40px", height: "40px"
}
class TopWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDepositCSE: false,
      modalWithdrawCSE: false,
      Vnd: [],
      ListCse: [],
      Owifi: [],
      Btc: [],
      holder: "",
      holderState: "",
      horizontalTabs: "home",
      verticalTabs: "info",
      pageTabs: "homePages",
      openedCollapses: ["collapseOne", "collapse1"],
    }
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

  render() {
    return (
      <>
        {/* VND */}
        <Col sm="12" md="12" lg="6" xl="6">
          <Card className="card-stats bgSky"  >
            <CardBody>
              <Container >
                <Row>
                  <img style={IconCoin} className="float-left" src={BitCoin} alt="BitCoin"></img>
                  <Col className="pr-0">
                    <h3 className="mb-0">VND {this.state.Vnd.balance}</h3>
                    <p className="card-category">Amount: 10 | Rate : 0.5 </p>
                    <a href="#section" onClick={this.toggleModalDepositVnd}>
                      Deposit</a>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        {/* CSE */}
        <Col sm="12" md="12" lg="6" xl="6">
          <Card className="card-stats bgSky" >
            <CardBody >
              <Container>
                <Row>
                  <img style={IconCoin} src={CSE1} alt="CSE"></img>
                  <Col className="pr-0">
                    <h3 className="mb-0"> CSE {this.state.ListCse.balance} </h3>
                    <p className="card-category">Amount: 15 | Rate : 0.5 </p>
                    <a href="#section" onClick={this.toggleModalDepositCse}>
                      Deposit
                    </a>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        {/* OWF */}
        <Col sm="12" md="12" lg="6" xl="6">
          <Card className="card-stats bgSky"  >
            <CardBody>
              <Container >
                <Row>
                  {/* <i class="pull-left ico-icon icon-md icon-primary mt-5"></i> */}
                  <img style={IconCoin} className="float-left" src={OWF1} alt="OWFCoin"></img>
                  <Col className="pr-0">
                    <h3 className="mb-0 text-nowrap">Paypal {this.state.Owifi.balance}</h3>
                    <p className="card-category">Amount: 8 | Rate : 0.5 </p>
                    <a href="#section" onClick={this.toggleModalDepositPaypal}>
                      Deposit </a>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        {/* BTC */}
        <Col sm="12" md="12" lg="6" xl="6">
          <Card className="card-stats bgSky"  >
            <CardBody>
              <Container >
                <Row>
                  <img style={IconCoin} className="float-left" src={BitCoin} alt="BitCoin"></img>
                  <Col className="pr-0">
                    <h3 className="mb-0">BTC {this.state.Btc.balance}</h3>
                    <p className="card-category">Amount: 10 | Rate : 0.5 </p>
                    <a href="#section" onClick={this.toggleModalDepositBtc}>
                      Deposit </a>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        <ModalVnd sVnd={this.state.modalDepositVnd} fVnd={this.toggleModalDepositVnd}/>
        <ModalCse sCse={this.state.modalDepositCse} fCse={this.toggleModalDepositCse} />
        <ModalPaypal sPaypal={this.state.modalDepositPaypal} fPaypal={this.toggleModalDepositPaypal} />
        <ModalBtc sBtc={this.state.modalDepositBtc} fBtc={this.toggleModalDepositBtc} />
      </>
    );
  }
}

export default TopWallet;

