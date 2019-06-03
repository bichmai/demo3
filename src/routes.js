
// import Buttons from "views/components/Buttons.jsx";
// import Calendar from "views/Calendar.jsx";
// import Charts from "views/Charts.jsx";
// import ExtendedForms from "views/forms/ExtendedForms.jsx";
// import FullScreenMap from "views/maps/FullScreenMap.jsx";
// import GoogleMaps from "views/maps/GoogleMaps.jsx";
// import GridSystem from "views/components/GridSystem.jsx";
// import Icons from "views/components/Icons.jsx";
// import Notifications from "views/components/Notifications.jsx";
// import Panels from "views/components/Panels.jsx";
// import ReactTables from "views/tables/ReactTables.jsx";
// import Register from "views/pages/Register.jsx";
// import RegularForms from "views/forms/RegularForms.jsx";
// import RegularTables from "views/tables/RegularTables.jsx";
// import SweetAlert from "views/components/SweetAlert.jsx";
// import Typography from "views/components/Typography.jsx";
// import ValidationForms from "views/forms/ValidationForms.jsx";
// import VectorMap from "views/maps/VectorMap.jsx";
// import Widgets from "views/Widgets.jsx";
import Multi from "views/forms/Multi.jsx";
import Report from "views/tables/Report.jsx";
import Historypayment from "views/tables/Historypayment.jsx";
import AdvertiseVideo from "views/pages/AdvertiseVideo.jsx";
import Fromqrcode from "views/Authentication/Fromqrcode.jsx";
import LockScreen from "views/pages/LockScreen.jsx";
import Login from "views/pages/Login.jsx";
import Signout from "views/pages/Signout.jsx";
import Logins from "views/Authentication/SingleVoucher/SignIn";
import Registers from "views/Authentication/SingleVoucher/SignUp";
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import UserCanhan from "views/pages/UserCanhan.jsx";
import Single from "views/forms/Single.jsx";
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
  {
    path: "/Single",
    name: "Single-Voucher",
    icon: "nc-icon nc-layout-11",
    component: Single,
    layout: "/user"
  },
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

  {
    path: "/Signout",
    name: "Sign out",
    icon: "nc-icon nc-alert-circle-i",
    component: Signout,

    layout: "/user"
  },
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
  // {
  //   collapse: true,
  //   name: "Components",
  //   icon: "nc-icon nc-layout-11",
  //   state: "componentsCollapse",
  //   invisible:true,
  //   views: [
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       mini: "B",
  //       component: Buttons,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       mini: "GS",
  //       component: GridSystem,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       mini: "P",
  //       component: Panels,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       mini: "SA",
  //       component: SweetAlert,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       mini: "N",
  //       component: Notifications,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       mini: "I",
  //       component: Icons,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       mini: "T",
  //       component: Typography,
  //       layout: "/user"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   icon: "nc-icon nc-ruler-pencil",
  //   state: "formsCollapse",
  //  invisible:true,
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms,
  //       layout: "/user"
  //     },

  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   icon: "nc-icon nc-single-copy-04",
  //   state: "tablesCollapse",
  //  invisible:true,
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/report-tables",
  //       name: "Report", 
  //       mini: "ET",
  //       component: Report,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       mini: "RT",
  //       component: ReactTables,
  //       layout: "/user"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   state: "mapsCollapse",
  //  invisible:true,
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/full-screen-map",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/vector-map",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap,
  //       layout: "/user"
  //     }
  //   ]
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   icon: "nc-icon nc-box",
  //   component: Widgets,
  //   invisible:true,
  //   layout: "/user"
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Charts,
  //   invisible:true,
  //   layout: "/user"
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "nc-icon nc-calendar-60",
  //   component: Calendar,
  //   invisible:true,
  //   layout: "/user"
  // },
  // {
  //   collapse: true,
  //   name: "Pages",
  //   icon: "nc-icon nc-book-bookmark",
  //   state: "pagesCollapse",
  //   views: [
  //     {
  //       path: "/login",
  //       name: "Login",
  //       mini: "L",
  //       component: Login,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/register",
  //       name: "Register",
  //       mini: "R",
  //       component: Register,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/lock-screen",
  //       name: "LockScreen",
  //       mini: "LS",
  //       component: LockScreen,
  //       layout: "/auth"
  //     },
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Components",
  //   icon: "nc-icon nc-layout-11",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       mini: "B",
  //       component: Buttons,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       mini: "GS",
  //       component: GridSystem,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       mini: "P",
  //       component: Panels,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       mini: "SA",
  //       component: SweetAlert,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       mini: "N",
  //       component: Notifications,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       mini: "I",
  //       component: Icons,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       mini: "T",
  //       component: Typography,
  //       layout: "/user"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   icon: "nc-icon nc-ruler-pencil",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms,
  //       layout: "/user"
  //     },

  //   ]
  // },  
  // {
  //   collapse: true,
  //   name: "Tables",
  //   icon: "nc-icon nc-single-copy-04",
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables,
  //       layout: "/user"
  //     },

  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       mini: "RT",
  //       component: ReactTables,
  //       layout: "/user"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/full-screen-map",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap,
  //       layout: "/user"
  //     },
  //     {
  //       path: "/vector-map",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap,
  //       layout: "/user"
  //     }
  //   ]
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   icon: "nc-icon nc-box",
  //   component: Widgets,
  //   layout: "/user"
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Charts,
  //   layout: "/user"
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "nc-icon nc-calendar-60",
  //   component: Calendar,
  //   layout: "/user"
  // }
];

export default routes;
