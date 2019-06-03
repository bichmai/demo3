import React from "react";
import {
  CardBody, 
  Container, Row, Col, Modal,
  ModalHeader, ModalBody,
} from "reactstrap";
import "react-tabs/style/react-tabs.css";
import qrcode from "../../assets/img/control/qrc.png";

const IconCoin1 = {
  width: "300px", height: "300px"
}
class ModalBtc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDepositCSE: false,
      modalWithdrawCSE: false,
      Btc: [],
    }
  }
  toggleModalDepositBtc = () => {
    this.setState({
      modalDepositBtc: !this.state.modalDepositBtc
    });
  }
  render() {
    console.log(this.props);
    const { sBtc, fBtc } = this.props;
    return (
      <>
       {/* Modal DepositBtc */}
       <Modal isOpen={sBtc} toggle={fBtc} size="md">
          <ModalHeader toggle={this.toggle} className="text-left">BTC Coin
          <button type="button" className="close" data-dismiss="modal" 
          aria-label="Close" onClick={fBtc}>
              <span aria-hidden="true">×</span>
            </button>
          </ModalHeader>
          <ModalBody >
            <Container fluid>
              <Row className="">
                <Col md="12">
                  <CardBody className="text-center">
                    <img src={qrcode} style={IconCoin1} alt="QRCODE" />
                  </CardBody>
                </Col>
                <Col md="12">
                  <p className="text-center">CD-hley-27490164963618400</p>
                </Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ModalBtc;