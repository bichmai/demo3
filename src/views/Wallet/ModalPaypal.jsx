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
class ModalPaypal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDepositCSE: false,
      modalWithdrawCSE: false,
      Owifi: [],
    }
  }
  toggleModalDepositPaypal = () => {
    this.setState({
      modalDepositPaypal: !this.state.modalDepositPaypal
    });
  }
  render() {
    console.log(this.props);
    const { sPaypal, fPaypal } = this.props;
    return (
      <>
       {/* Modal DepositPaypal */}
       <Modal isOpen={sPaypal} toggle={fPaypal} size="md">
          <ModalHeader toggle={this.toggle} className="text-left">Paypal Coin
          <button type="button" className="close" data-dismiss="modal" 
          aria-label="Close" onClick={fPaypal}>
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
                  <p className="text-center">AB-2549153-6583519365</p>
                </Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ModalPaypal;