

import Multi from "views/forms/Multi.jsx";
import Report from "views/tables/Report.jsx";
import Historypayment from "views/tables/Historypayment.jsx";
import AdvertiseVideo from "views/pages/AdvertiseVideo.jsx";
import Fromqrcode from "views/Authentication/Fromqrcode.jsx";
import LockScreen from "views/pages/LockScreen.jsx";
import Login from "views/pages/Login.jsx";
// import Signout from "views/pages/Signout.jsx";
import Logins from "views/Authentication/SingleVoucher/SignIn";
import Registers from "views/Authentication/SingleVoucher/SignUp";
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import UserCanhan from "views/pages/UserCanhan.jsx";
// import Single from "views/forms/Single.jsx";
import BranchAuth from "views/Authentication/BranchAuth";
import BranchAuthMuti from "views/Authentication/BranchAuthMuti";
import Wallet from "views/Wallet/Wallet.jsx";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/user"
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: "nc-icon nc-book-bookmark",
    component: Wallet,
    layout: "/user"
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    icon: "nc-icon nc-book-bookmark",
    component: UserProfile,
    invisible: true,
    layout: "/user"
  },
  {
    path: "/user-canhan",
    name: "UserCanhan",
    icon: "nc-icon nc-book-bookmark",
    component: UserCanhan,
    invisible: true,
    layout: "/user"
  },
  // {
  //   path: "/Single",
  //   name: "Single-Voucher",
  //   icon: "nc-icon nc-layout-11",
  //   component: Single,
  //   layout: "/user"
  // },
  {
    path: "/branchauth",
    component: BranchAuth,
    invisible: true,
    layout: "/auth"
  },
  {
    path: "/BranchAuthMuti",
    component: BranchAuthMuti,
    invisible: true,
    layout: "/auth"
  },
  {
    path: "/Multi",
    name: "Multi-Voucher",
    icon: "nc-icon nc-layout-11",
    component: Multi,
    layout: "/user"
  },
  {
    path: "/report-tables",
    name: "Report",
    icon: "nc-icon nc-single-copy-04",
    component: Report,
    layout: "/user"
  },
  {
    path: "/History-payment",
    name: "History-Payment",
    icon: "nc-icon nc-single-copy-04",
    component: Historypayment,
    layout: "/user"
  },

  // {
  //   path: "/Signout",
  //   name: "Sign out",
  //   icon: "nc-icon nc-alert-circle-i",
  //   component: Signout,

  //   layout: "/user"
  // },
  {
    path: "/advertise-first",
    name: "advertise",
    icon: "nc-icon nc-bank",
    component: AdvertiseVideo,
    layout: "/auth",
    invisible: true
  },

  {
    path: "/Fromqrcode",
    name: "Fromqrcode",
    icon: "nc-icon nc-bank",
    component: Fromqrcode,
    invisible: true,
    layout: "/auth"
  },
  {
    path: "/Logins",
    name: "Logins",
    icon: "nc-icon nc-bank",
    component: Logins,
    invisible: true,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Registers",
    icon: "nc-icon nc-bank",
    component: Registers,
    invisible: true,
    layout: "/auth"
  },
  {
    collapse: true,
    name: "ADS",
    icon: "nc-icon nc-book-bookmark",
    state: "pagesCollapse",
    invisible: true,
    views: [

    ]
  },
  {
    path: "/login",
    name: "Login",
    mini: "L",
    component: Login,

    invisible: true,
    layout: "/auth"
  },
  {
    path: "/lock-screen",
    name: "LockScreen",
    mini: "LS",
    component: LockScreen,

    invisible: true,
    layout: "/auth"
  },
  
];

export default routes;
