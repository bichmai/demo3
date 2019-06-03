import React from "react";
// react plugin used to create charts
import { Pie } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import {
  chartExample11,
} from "variables/charts.jsx";




var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Amount</p>
                        <CardTitle tag="p">10 egv</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" />
                    Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Using</p>
                        <CardTitle tag="p">5 egv</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar-o" />
                    Last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Residual</p>
                        <CardTitle tag="p">5 egv</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" />
                    In the last hour
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Unpublished</p>
                        <CardTitle tag="p">10 egv</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" />
                    Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Row>
                    <Col className="ml-auto mr-auto" md="8">
                    <CardTitle tag="h4">Global Using Voucher</CardTitle>
                      <p className="card-category">
                        All products that were shipped
                      </p>
                      <VectorMap
                        map={"world_mill"}
                        backgroundColor="transparent"
                        zoomOnScroll={false}
                        containerStyle={{
                          height: "300px"
                        }}
                        containerClassName="map"
                        regionStyle={{
                          initial: {
                            fill: "#e4e4e4",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0
                          }
                        }}
                        series={{
                          regions: [
                            {
                              values: mapData,
                              scale: ["#AAAAAA", "#444444"],
                              normalizeFunction: "polynomial"
                            }
                          ]
                        }}
                      />
                    </Col>
                    <Col md="4">
                      <Card>
                        <CardHeader>
                            <h4>Amount Share</h4>
                            <p className="card-category">Last Campaign Performance</p>
                        </CardHeader>
                        <CardBody>
                          <Pie
                            data={chartExample11.data}
                            options={chartExample11.options}
                            width={456}
                            height={300}
                          />
                        </CardBody>
                        <CardFooter>
                          <div className="legend">
                            <i className="fa fa-circle text-info" />
                              Twitter
                          </div>
                          <div className="legend">
                            <i className="fa fa-circle text-warning" />
                              FB
                          </div>
                          <div className="legend">
                            <i className="fa fa-circle text-default" />
                              Gmail
                          </div>
                        <hr />
                          <div className="stats">
                            <i className="fa fa-calendar" />
                              Number of emails sent
                          </div>
                          </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>   
               
        </div>
      </>
    );
  }
}

export default Dashboard;
