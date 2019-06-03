import React from "react";
import classnames from "classnames";
//import Select from "react-select";
// reactstrap components
import {
 CardBody, FormGroup,
  Container, Row, Col, Modal,
  Input,
  TabContent, TabPane,
  Button,
} from "reactstrap";
import "react-tabs/style/react-tabs.css";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";


class ModalVndpmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Vnd: [],
      holder: "",
      holderState: "",
      horizontalTabs: "home",
      verticalTabs: "info",
      pageTabs: "homePages",
      openedCollapses: ["collapseOne", "collapse1"],
    }
  }
  toggleModalDepositVnd = () => {
    this.setState({
      modalDepositVnd: !this.state.modalDepositVnd
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
  dashboard = () => {
    this.props.history.push('/user/dashboard');
  };
  render() {
    console.log(this.props);
    const { sVnd, fVnd } = this.props;
    return (
      <>      
        {/* Modal DepositVnd */}
        <Modal isOpen={sVnd} toggle={fVnd} size="md">
          <Container fluid>
            <Row >
              <Col md="12">
                    <h5>VND Coin<button type="button" className="close"
                     data-dismiss="modal" 
                     aria-label="Close"
                     onClick={fVnd}>
                    <span aria-hidden="true">×</span>
                    </button></h5>
                  <CardBody>
                    <TabContent
                      className="text-left"
                      id="my-tab-content"
                      activeTab={this.state.horizontalTabs}
                    >
                      <TabPane tabId="home" role="tabpanel">
                        <Container>
                            <Input
                              type="text"
                              name="sotien"
                              placeholder="10.000.000"
                            >
                            </Input>
                            <Button
                              aria-expanded={
                                this.state.horizontalTabs === "profile"
                              }
                              data-toggle="tab"
                              href="#pablo"
                              role="tab"
                              color="primary"
                              className={classnames("pull-right",
                                this.state.horizontalTabs === "profile"
                                  ? "active"
                                  : ""
                                  )}
                              onClick={() =>
                                this.setState({ horizontalTabs: "profile" })
                              }
                            >
                              Send
                          </Button>
                        </Container>
                      </TabPane>
                      <TabPane tabId="profile" role="tabpanel">
                        <Container fluid>
                          <Row>
                            <Col md="12">
                              <FormGroup >
                                <label>Account Holder *</label>
                                <Input
                                  name="holder"
                                  type="text"
                                  placeholder="Goldennet"
                                  disabled
                                />
                              </FormGroup>
                              <FormGroup>
                                <label>Account Number *</label>
                                <Input
                                  name="accnumber"
                                  type="text"
                                  placeholder="1231794904856"
                                  disabled
                                />
                              </FormGroup>
                              <FormGroup >
                                <label>Amount to transfer *</label>
                                <Input
                                  name="transferamount"
                                  type="text"
                                  placeholder="10.000.000"
                                  disabled
                                />
                              </FormGroup>
                              <FormGroup >
                                <label>Center *</label>
                                <Input
                                  name="transfercenter"
                                  type="text"
                                  placeholder="QR-74957 (random mã số)"
                                  disabled
                                />
                              </FormGroup>
                              <FormGroup >
                                <label>Branch Vietcombank *</label>
                                <Input
                                  name="branchbank"
                                  type="text"
                                  placeholder="TP HCM"
                                />
                              </FormGroup>
                              <h6 className="text-danger"><b>Important!!!</b></h6>
                              <p className="text-left">
                                Goldennet nhận hàng ngàn dòng tiền mỗi ngày.
                                Bạn  phải gửi đúng số tiền như hướng dẫn,
                                đúng nội dung chuyển khoản như hướng dẫn để chúng tôi có thể ghi có cho bạn.
                                Bất cứ sai sót nào cũng có thể dẫn đến mất tiền.
                                Sau khi bạn gửi thanh toán. Hãy cập nhật chứng minh thanh toán dưới dây để chúng tôi có thể xử lý.</p>
                              <h6>Certificate of payment *</h6>
                              <FormGroup className="text-left">
                                <ImageUpload />
                              </FormGroup>
                              <Button
                                aria-expanded={this.state.horizontalTabs === "home"}
                                data-toggle="tab"
                                href="#pablo"
                                role="tab"
                                color="primary"
                                className={classnames("pull-left",
                                  this.state.horizontalTabs === "home"
                                    ? "active"
                                    : ""
                                )}
                                onClick={() =>
                                  this.setState({ horizontalTabs: "home" })
                                }
                              >Back
                          </Button>
                              <Button className="pull-right"
                               color="primary" 
                                 >Verify</Button>
                            </Col>
                          </Row>
                        </Container>
                      </TabPane>
                    </TabContent>
                  </CardBody>
              </Col>
            </Row>
          </Container>
        </Modal>
      </>
    );
  }
}

export default ModalVndpmt;