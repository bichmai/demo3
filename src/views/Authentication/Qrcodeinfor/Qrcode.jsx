import React from "react";

// reactstrap components
import {
    InputGroupAddon, FormGroup,
    Card, CardHeader, Input, InputGroup,
    InputGroupText, CardTitle,Button,
    Container, Col, Row
} from "reactstrap";

import classnames from "classnames";
import Select from "react-select";
import Datetime from 'react-datetime';
import NotificationAlert from "react-notification-alert";
class Qrcode extends React.Component {
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
    Steapqrcode= () => {
        this.props.history.push('/auth/Steapqrcode');
      };
    render() {

        return (
            <div className="login-page">
                <NotificationAlert ref="notificationAlert" />
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" lg="8" md="8">
                            <Card>
                                <CardHeader className="text-center">
                                    <CardTitle tag="h4">Build Your QR Code Single Voucher</CardTitle>
                                </CardHeader>
                                <Row>
                                    {/* co ben trai */}
                                    <Col sm={12} md={12}>
                                        <InputGroup
                                            className={classnames(this.state.areacodeState, {
                                                "input-group-focus": this.state.areacodeFocus
                                            })}
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-single-02" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="area code"
                                                placeholder="Area code (required)"
                                                type="text"
                                                onChange={e => this.change(e, " areacode", "length", 1)}
                                                onFocus={e => this.setState({ areacodeFocus: true })}
                                                onBlur={e => this.setState({ areacodeFocus: false })}
                                            />
                                            {this.state.areacodeState === "has-danger" ? (
                                                <label className="error">This field is required.</label>
                                            ) : null}
                                        </InputGroup>

                                        <InputGroup
                                            className={classnames(this.state.ProvincecodeState, {
                                                "input-group-focus": this.state.ProvincecodeFocus
                                            })}
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-circle-10" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="Provincecode"
                                                placeholder="Province code (required)"
                                                type="text"
                                                onChange={e => this.change(e, "Provincecode", "length", 1)}
                                                onFocus={e => this.setState({ ProvincecodeFocus: true })}
                                                onBlur={e => this.setState({ ProvincecodeFocus: false })}
                                            />
                                            {this.state.ProvincecodeState === "has-danger" ? (
                                                <label className="error">This field is required.</label>
                                            ) : null}
                                        </InputGroup>

                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-circle-10" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="Company"
                                                placeholder="Company(required)"
                                                type="text"
                                                onChange={e => this.change(e, "Company", "length", 1)}
                                            />
                                        </InputGroup>

                                        <InputGroup >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-circle-10" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="usercode"
                                                placeholder=" User code(required)"
                                                type="text"
                                                onChange={e => this.change(e)}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="nc-icon nc-circle-10" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        name="quantity"
                                        placeholder="Quantity(required)"
                                        type="text"
                                        onChange={e => this.change(e)}
                                    />
                                </InputGroup>
                                <FormGroup>
                                    <Row>
                                        <Col md="6">
                                            <Datetime
                                                timeFormat={false}
                                                inputProps={{ placeholder: "Start Date" }}
                                            />
                                        </Col>
                                        <Col md="6">
                                            <Datetime
                                                timeFormat={false}
                                                inputProps={{ placeholder: "end Date" }}
                                            />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col md="8">
                                            <Input
                                                name="valuevc"
                                                placeholder="Value(required)"
                                                type="text"
                                                onChange={e => this.change(e)}
                                            />
                                        </Col>
                                        <Col md="4">
                                            <InputGroupAddon addonType="append">
                                                <Col>
                                                    <Select
                                                        className="valuevc"
                                                        classNamePrefix="valuevc-select"
                                                        name="valueVc"
                                                        value={this.state.valueVc}
                                                        onChange={value =>
                                                            this.setState({ valueVC: value })
                                                        }
                                                        options={[
                                                            {
                                                                value: "",
                                                                label: "Single Option",
                                                                isDisabled: true
                                                            },
                                                            { value: "1", label: "USD" },
                                                            { value: "2", label: "VND" }
                                                        ]}
                                                    />
                                                </Col>
                                            </InputGroupAddon>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <Row>
                                    <Col>
                                    <Button 
                                    onClick={this.Steapqrcode}
                                    className="float-right" 
                                    color="primary" 
                                    size="md">
                                         Next
                                    </Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                )}
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

export default Qrcode;
