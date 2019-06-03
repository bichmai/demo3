import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";

class Historypayment extends React.Component {
  render() {
    
    return (
      <>
        <div className="content Statistical table table-striped">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Table responsive >
                    <thead className="text-center">
                      <tr>
                        <th className="text-center">Time</th>
                        <th className="text-center">QRCode Name</th>
                        <th className="text-center">From Address</th>
                        <th className="text-center">Coin</th>
                        <th className="text-center">All The Amount</th>
                        <th className="text-center">Txid</th>                      
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">06-05-2019 <br/> 00:00</td>
                        <td className="text-center">84-jwhfqkw-76528635237632135</td>
                        <td className="text-center">cse5b3ce</td>
                        <td className="text-center">CSE</td>
                        <td className="text-center">100000.00 vnd</td>
                        <td className="text-center">9ca58dfcf</td>                                       
                      </tr>
                      <tr>
                        <td className="text-center">06-05-2019 <br/> 00:00</td>
                        <td className="text-center">84-jwhfqkw-76528635237632135</td>
                        <td className="text-center">cse5b3ce</td>
                        <td className="text-center">CSE</td>
                        <td className="text-center">100000.00 vnd</td>
                        <td className="text-center">9ca58dfcf</td>                                                       
                      </tr>
                      <tr>
                        <td className="text-center">06-05-2019 <br/> 00:00</td>
                        <td className="text-center">84-jwhfqkw-76528635237632135</td>
                        <td className="text-center">cse5b3ce</td>
                        <td className="text-center">CSE</td>
                        <td className="text-center">100000.00 vnd</td>
                        <td className="text-center">9ca58dfcf</td>                                                       
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Historypayment;
