import React from "react";
import Select from "react-select";
// reactstrap components
import {
    FormGroup,
    Input,
    Row, Col, Modal, ModalHeader, ModalBody,
    Button,
} from "reactstrap";
class ModalAddField extends React.Component {

    render() {
        console.log(this.props);
        const { isOpenA, toggleA } = this.props;
        return (
            <>

                <Modal isOpen={isOpenA} toggle={toggleA} size="lg">
                    <ModalHeader toggle={this.toggle} className="text-left ">Add Field
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleA}>
                            <span aria-hidden="true">×</span>
                    </button>  
                    </ModalHeader>
                    <ModalBody >
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        // ctry validation
                                        name="Name"
                                        //value={this.state.AddFieldSelect}
                                        // onChange={value =>
                                        //     this.setState({ AddFieldSelect: value })
                                        // }
                                        //options={optionAddField}
                                        placeholder="Name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="8">
                                <FormGroup>
                                    <Input
                                        name="Info"
                                        placeholder="Information"
                                        type="text"
                                    // onChange={e => this.change(e, "organizationlast", "length", 1)}
                                    />

                                </FormGroup>
                            </Col>
                            <Col>
                                <Button color="primary" className="pull-right">Add</Button>
                            </Col>
                        </Row>

                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default ModalAddField;
