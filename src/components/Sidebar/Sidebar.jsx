import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Collapse } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import avatar from "assets/img/faces/ayo-ogunseinde-2.jpg";
// import favicon from "assets/img/control/favicon-dashboard.png";
import goldenet from "../../assets/img/control/logo 1.png";
var ps;
const imgIcon = {
  width: '209px',
  height: '62px'
};
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getCollapseStates(props.routes);
    this.state = {
      name: "thanhnhadev"
    };
  }
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  getCollapseStates = routes => {
    let initialState = {};
    routes.map((prop, key, ) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: this.getCollapseInitialState(prop.views),
          ...this.getCollapseStates(prop.views),
          ...initialState

        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.pathname.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }
  // this function creates the links and collapses that appear in the sidebar (left menu)
  createLinks = routes => {
    return routes.map((prop, key) => {
      //hidden sidebar
      if (prop.invisible) return null;

      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !this.state[prop.state];
        return (
          <li
            className={this.getCollapseInitialState(prop.views) ? "active" : ""}
            key={key}
          >
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={this.state[prop.state]}
              onClick={e => {
                e.preventDefault();
                this.setState(st);
              }}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <p>
                    {prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                  <>
                    <span className="sidebar-mini-icon">{prop.mini}</span>
                    <span className="sidebar-normal">
                      {prop.name}
                      <b className="caret" />
                    </span>
                  </>
                )}
            </a>
            <Collapse isOpen={this.state[prop.state]}>
              <ul className="nav">{this.createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }
      return (
        <li className={this.activeRoute(prop.layout + prop.path)} key={key}>
          <NavLink to={prop.layout + prop.path} activeClassName="">
            {prop.icon !== undefined ? (
              <>
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </>
            ) : (
                <>
                  <span className="sidebar-mini-icon">{prop.mini}</span>
                  <span className="sidebar-normal">{prop.name}</span>
                </>
              )}
          </NavLink>
        </li>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  componentDidMount() {
    // if you are using a Windows Machine, the scrollbars will have a Mac look
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    // we need to destroy the false scrollbar when we navigate
    // to a page that doesn't have this component rendered
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    
    const testProfile = JSON.parse(sessionStorage.getItem('hiddenprofile'));
   
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          {/* <a
            href="http://owifi.io/"
            className="simple-text logo-mini"
          >
            <div className="logofavicon">
              <img src={favicon} alt="react-logo" />
            </div>
          </a> */}
          <a
            href="https://csewallet.io/"
            className="simple-text logo-normal"
          >
            <div className="imgbanner">
              <img src={goldenet} style={imgIcon} alt="react-logo" />
            </div>
          </a>
        </div>

        <div className="sidebar-wrapper" ref="sidebar">
          <div className="user">
            <div className="photo">
              <img src={avatar} alt="Avatar" />
            </div>
            <div className="info">
              <a
                href="#pablo"
                data-toggle="collapse"
                aria-expanded={this.state.openAvatar}
                onClick={() =>
                  this.setState({ openAvatar: !this.state.openAvatar })
                }
              >
                <span>
                  {this.state.name}
                  <b className="caret" />
                </span>
              </a>
              <Collapse isOpen={this.state.openAvatar}>
                <ul className="nav">
                  <li>
                    {testProfile === true ? 
                      <NavLink to="/user/user-canhan" activeClassName="">
                        <span className="sidebar-mini-icon">UC</span>
                        <span className="sidebar-normal">User Ca Nhan</span>
                      </NavLink>
                      :
                      <NavLink to="/user/user-profile" activeClassName="">
                        <span className="sidebar-mini-icon">UT</span>
                        <span className="sidebar-normal">User To Chuc</span>
                      </NavLink>
                    }
                    
                  </li>
                </ul>
              </Collapse>
            </div>
          </div>
          <Nav>{this.createLinks(this.props.routes)}</Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
