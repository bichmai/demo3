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
class ModalCsepmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDepositCSE: false,
      modalWithdrawCSE: false,
      ListCse: [],
    }
  }
  toggleModalDepositCse = () => {
    this.setState({
      modalDepositCse: !this.state.modalDepositCse
    });
  }
  render() {
      console.log(this.props);
      const { sCse, fCse } = this.props;
    return (
      <>
        {/* Modal DepositCse */}
        <Modal isOpen={sCse} toggle={fCse} size="md">
          <ModalHeader toggle={this.toggle} className="text-left">CSE Coin
          <button type="button" className="close" 
          data-dismiss="modal" aria-label="Close" 
          onClick={fCse}>
              <span aria-hidden="true">×</span>
            </button>
          </ModalHeader>
          <ModalBody >
            <Container fluid>
              <Row >
                <Col md="12">
                  <CardBody className="text-center">
                    <img src={qrcode} style={IconCoin1} alt="QRCODE" />
                  </CardBody>
                </Col>
                <Col md="12">
                  <p className="text-center">84-jwhfqkw-76528635237632135</p>
                </Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ModalCsepmt;