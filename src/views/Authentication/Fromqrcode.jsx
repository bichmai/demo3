import React from "react";
// reactstrap components
import {
  Button,
  Card, CardHeader, CardBody, CardFooter,
  Container, Col, Row,
} from "reactstrap";
import qr1 from "../../assets/img/control/qr1.png";
import qr2 from "../../assets/img/control/qr2.png";

class Fromqrcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  //tạo mã qrcode single
  registerloginBAS = () => {
    this.props.history.push('/auth/BranchAuth');
  };
  //tạo mã qrcode muti
  registerloginBAM = () => {
    this.props.history.push('/auth/BranchAuthMuti');
  };
  registerlogin = () => {
    this.props.history.push('/auth/Logins');
  };
  render() {
    return (
      <div className="login-page a">
        <Container>
          <Card>
            <CardBody>
              <Row >
                <Col md="6">
                  <CardHeader><h4 className="text-center">Single Voucher</h4></CardHeader>
                  <CardHeader><p className="text-center">Single Voucher will have a value for one time of use.</p></CardHeader>
                  <CardBody className="text-center" >
                    <Button className="abc" outline color="qrcodeBlue" onClick={this.registerloginBAS}>
                      <img alt="Qrcode" src={qr1} className="ab" /></Button>
                  </CardBody>

                </Col>
                <Col md="6">
                  <CardHeader className="text-center">
                    <h4 className="text-center">Multi Voucher</h4>
                  </CardHeader>
                  <CardHeader><p className="text-center">Multi Voucher it's 'll used give a organization/Companny </p></CardHeader>
                  <CardBody className="text-center">
                    <Button className="abc" outline color="qrcodeBlue" onClick={this.registerloginBAM}>
                      <img alt="Qrcode" src={qr2} className="ab" /></Button>
                  </CardBody>
                </Col>
              </Row>

            </CardBody>
            <CardFooter className="text-center ah">
              <Button size="sm" className="b"
                color="primary" outline onClick={this.registerlogin}>Login</Button>
            </CardFooter>
          </Card>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/login.jpg")})`,
            position: "absolute"
          }}
        />
      </div>
    );
  }
}
export default Fromqrcode;