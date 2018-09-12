import {
  // grayColor,
  // primaryColor,
  // infoColor,
  successColor,
  // warningColor,
  // dangerColor,
  // roseColor
} from "assets/jss/material-dashboard-pro-react.jsx";

export default {
  LineChartPath:{

  },
  GraphGrid:{
    '& .domain':{
      stroke: 'none'
    },
    '& .tick line':{
      opacity: 0.4,
      stroke:'white'
    },

  },
  BaseGraph:{
      backgroundColor:successColor,
  },
  LinePopover:{
      'z-index': 1,
      // 'display':'none',
      position:'absolute',
      width: '80%',
      opacity: 0.85,
  }
}
