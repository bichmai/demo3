import React from "react";
import {
  Row, Col,
  Table,
  ButtonGroup, Button
} from "reactstrap";

// const border12 = {
//   "borderRadius" : "5px",
//   "background": "#00bdf8",
//   "color": "white",
//   "border": "2px"
// }
class ReceiveHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedCollapses: ["collapseOne"],
      listReceiveHistory:[
        {
          createdAt: '10-2-2018',
          address: '23',
        }
      ]
   };
  }
  render() {
    return (
      <>
        <Row>
          <Col md="12" >

            <Table responsive striped  >
              <thead >
                {/* "debuage" */}
                <tr  >
                  <th className="text-center" >TIME</th>
                  <th className="text-center" >FROM ADDRESS</th>
                  <th className="text-center">COIN</th>
                  <th className="text-center" >Amount</th>
                  <th className="text-center">Txid</th>
                  <th className="text-center">Status</th>
                </tr>

              </thead>
              <tbody>
                <tr>
                    <td className="text-center">10/01/2019</td>
                    <td className="text-center">9 Nguyễn Khoái P1 Q4 TpHCM</td>
                    <td className="text-center">10</td>
                    <td className="text-center">abc</td>
                    <td className="text-center">xyz</td>
                    <td className="text-center">1234567</td>
                  </tr>
                  <tr>
                    <td className="text-center">10/01/2019</td>
                    <td className="text-center">9 Nguyễn Khoái P1 Q4 TpHCM</td>
                    <td className="text-center">10</td>
                    <td className="text-center">abc</td>
                    <td className="text-center">xyz</td>
                    <td className="text-center">1234567</td>
                 </tr>
                 <tr>
                  <td className="text-center">10/01/2019</td>
                  <td className="text-center">9 Nguyễn Khoái P1 Q4 TpHCM</td>
                  <td className="text-center">10</td>
                  <td className="text-center">abc</td>
                  <td className="text-center">xyz</td>
                  <td className="text-center">1234567</td>
                </tr>
              </tbody>              
            </Table>
            <div className="text-center">
              <ButtonGroup className="Pagination">
                <Button
                  className="btn-round"
                  color="info"
                  outline
                  type="button"
                >
                  Left
                </Button>
                <Button
                  className="btn-round"
                  color="info"
                  outline
                  type="button"
                >
                  2
                </Button>
                <Button
                  className="btn-round"
                  color="info"
                  outline
                  type="button"
                >
                  3
                </Button>
                <Button
                  className="btn-round"
                  color="info"
                  outline
                  type="button"
                >
                  Right
                </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>

      </>
    );
  }
}
export default ReceiveHistory;
