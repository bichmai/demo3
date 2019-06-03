import React from "react";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player, ControlBar, PlayToggle, CurrentTimeDisplay, TimeDivider, VolumeMenuButton } from "video-react";
import "../../assets/demo/demo.css";
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Container,
  Col, Row, FormGroup,
  Button,
} from "reactstrap";
import GetMoney from "assets/img/icon/Getmoney-icon.png";
import SmartWifi from "assets/img/icon/Smartwifi-icon.png";
import OpenWifi from "assets/img/icon/Openwifi-icon.png";
import Video from '../../assets/video/videodemo1.mp4'
const imgIcon = {
  width: '25px'
};

const sources = {
  bunnyTrailer: Video,
  bunnyMovie: Video
};

class AdvertiseVideo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources['bunnyMovie'],
      "duration": 596.48,
      "currentTime": 0,
      "seekingTime": 0,
      "buffered": {},
      "seeking": false,
      "playbackRate": 1,
      "volume": 1,
      "readyState": 4,
      "networkState": 2,
      "videoWidth": 853,
      "videoHeight": 480,
      "hasStarted": false,
      "userActivity": false,
      "isActive": true,
      "src": "",
      "preload": "auto",
      "defaultPlaybackRate": 1,
      "played": {},
      "seekable": {},
      "autoPlay": true,
      "loop": false
    }
    this.pause = this.pause.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }
  componentDidMount() {
    document.body.classList.toggle("login-page");
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    this.refs.player.play();
    this.refs.player.actions.toggleFullscreen = () => { console.log('prevent full screen video');};
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  handleStateChange(state) {
    this.setState({
      player: state,
      currentTime: state.currentTime,
      seekingTime: state.seekingTime,
      autoPlay: true,
      played: true
    });
  }
  toggleFullscreen() {

  }
  redirectLogin = () => {
    this.props.history.push('/auth/Fromqrcode');
  }

  pause() {
    this.refs.player.pause();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState();
      const currentTime = player.currentTime;
      this.refs.player.seek(currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds);
    };
  }

  setMuted(muted) {
    return () => {
      this.refs.player.muted = muted;
    };
  }
  render() {
    return (
      <div className="advertise-page">
        <Container >
          <Row >
            <Col lg="8" md="8" className="videoadvertise" >
              <Player
                className="myVideoAdvertise" ref="player"
                // startTime = '0'
                muted
                autoPlay
                //controls
                playsInline
              >
                <source src={this.state.source} />
                <ControlBar autoHide={true} disableDefaultControls={true}>
                  <CurrentTimeDisplay order={4.1} />
                  <TimeDivider order={4.2} />
                  <PlayToggle />
                  <VolumeMenuButton vertical />
                </ControlBar>
              </Player>
              <Container>
                <Row>
                  <Col sm="6" >
                    <FormGroup className="pull-left">
                      <Link to="/auth/Logins"><Button color="primary" outline size="sm">Login</Button></Link>
                      <Link to="/auth/register" ><Button color="primary" outline size="sm">Register</Button></Link>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup className="pull-right">
                      <Button onClick={this.redirectLogin} className="btn-primary" size="sm">Create your E-Voucher</Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
            </Col>

            <Col className="ml-auto" lg="4" md="4" >
              <div className="info-area info-horizontal mt-5">
                <div className="icon icon-primary">
                  <img alt="Open wifi" src={OpenWifi} style={imgIcon} />
                </div>
                <div className="description">
                  <h5 className="info-title">E-Voucher QRCODE</h5>
                  <p className="description">
                    E-Voucher QRCODE uses four standardized encoding modes
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-primary">

                  <img alt="smartwifi" src={SmartWifi} style={imgIcon} />
                </div>
                <div className="description">
                  <h5 className="info-title">Smart E-Voucher QRcode</h5>
                  <p className="description">
                    Smart E-Voucher QR Scanner dynamically detect content type within a single panel without toggling camera view.
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-primary">

                  <img alt="Get money" src={GetMoney} style={imgIcon} />
                </div>
                <div className="description">
                  <h5 className="info-title">Blockchain Application</h5>
                  <p className="description">
                    CSE30 is a complete blockchain and cryptocurrency project. The CSE30 develops a smart platform for finding upgrade features on any protocol you have developed before.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

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

export default AdvertiseVideo;