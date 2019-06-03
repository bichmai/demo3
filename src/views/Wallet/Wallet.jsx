import React from "react";
// reactstrap components
import {
  Card, 
  Row, Col,CardBody
} from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
// Tab 
import ReceiveHistory from "./Tab/ReceiveHistory";
import SendHistory from "./Tab/SendHistory";
import TopWallet from "./TopWallet";
import OWF1 from "../../assets/img/Coin/OWIFICoin1.jpg";
import CSE1 from "../../assets/img/Coin/CSECoin1.jpg";

//css
const border12 = {
  "fontSize": "12px",
  "borderRadius" : "4px",
  "border": "1px solid gray",
  "marginRight": "-9px",
  "marginBottom":"8px",
  "marginTop":"8px",
  "marginLeft":"12px"
}
const bgtabcolors = {
    "Default": "rgba(0, 0, 0, 0)",
    "Page" : "rgb(244, 243, 237)",
    "White": "#FFFFFF"
}
const IconCoin = {
  width:"15px", height:"15px",
  marginLeft:"2px", marginRight:"5px", marginTop:"2px", marginBottom:"2px",
}

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  foo = (e) =>{
    e.preventDefault();
  }
  render() {
    return (  
      <div className="content">

        <div className="Wallet">
          <Row>
            <TopWallet />
            <Col>

              <Card style={{ backgroundColor: bgtabcolors.Default }}>
                <Tabs forceRenderTabPanel defaultIndex={1} style={{ backgroundColor: bgtabcolors.White, borderRadius: 5 }} >
                  {/* debuge */}
                  <TabList style={{}}>
                    <Tab style={border12} >
                    <img style={IconCoin} className="float-left" src={CSE1} alt="CSECoin1"></img>
                     VND
                    </Tab>
                    <Tab style={border12} >
                    <img style={IconCoin} className="float-left" src={CSE1} alt="CSECoin1"></img>
                     CSE
                    </Tab>
                    <Tab style={border12} >
                    <img style={IconCoin} className="float-left" src={OWF1} alt="OWFCoin1"></img>
                    PayPal
                    </Tab>
                    <Tab style={border12} >
                    <img style={IconCoin} className="float-left" src={CSE1} alt="CSECoin1"></img>
                     BTC
                    </Tab>
                    <br />
                  </TabList>

                  {/* Noi dung tab */}
                  <CardBody>
                    {/* debuage */}
                    <TabPanel>
                      <Tabs forceRenderTabPanel>
                        <TabList>
                          <Tab>+ Receive History</Tab>
                          <Tab>- Send History </Tab>
                        </TabList>

                        <TabPanel>
                          <ReceiveHistory />
                        </TabPanel>
                        <TabPanel>
                          <SendHistory />
                        </TabPanel>
                       
                      </Tabs>
                    </TabPanel>

                    <TabPanel>
                      <Tabs forceRenderTabPanel>
                        <TabList>
                          <Tab>+ Receive History</Tab>
                          <Tab>- Send History </Tab>
                        </TabList>

                        <TabPanel>
                          <ReceiveHistory />
                        </TabPanel>
                        <TabPanel>
                          <SendHistory />
                        </TabPanel>
                       
                      </Tabs>
                    </TabPanel>

                    <TabPanel>
                      <Tabs forceRenderTabPanel>
                        <TabList>
                          <Tab>+ Receive History</Tab>
                          <Tab>- Send History </Tab>
                        </TabList>

                        <TabPanel>
                          <ReceiveHistory />
                        </TabPanel>
                        <TabPanel>
                          <SendHistory />
                        </TabPanel>
                       
                      </Tabs>
                    </TabPanel>

                    <TabPanel>
                      <Tabs forceRenderTabPanel>
                        <TabList>
                          <Tab>+ Receive History</Tab>
                          <Tab>- Send History </Tab>
                        </TabList>

                        <TabPanel>
                          <ReceiveHistory />
                        </TabPanel>
                        <TabPanel>
                          <SendHistory />
                        </TabPanel>
                       
                      </Tabs>
                    </TabPanel>
                    
                  </CardBody>
                </Tabs>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Wallet;
