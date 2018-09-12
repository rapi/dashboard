import Dashboard from "views/Dashboard/Dashboard.jsx";
import Crypto from "views/_Crypto/List.jsx";
import Stocks from "views/_Stocks/List.jsx";


//Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Storage from "@material-ui/icons/Storage";
import Store from "@material-ui/icons/Store";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
    {
      path: "/crypto",
      name: "Crypto",
      icon: Storage,
      component: Crypto
    },
      {
        path: "/stocks",
        name: "Crypto",
        icon: Store,
        component: Stocks
      },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
