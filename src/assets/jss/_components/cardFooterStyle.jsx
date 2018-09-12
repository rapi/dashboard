import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader
} from "assets/jss/material-dashboard-pro-react.jsx";
const cardFooterStyle = {
  cardFooter: {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterPricing: {
    zIndex: "2"
  },
  cardFooterTestimonial: {
    display: "block"
  },
  cardFooterStats: {
    borderTop: "1px solid #eee",
    marginTop: "20px",
    "& svg": {
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "16px",
      height: "16px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "16px",
      lineHeight: "16px"
    }
  },
  cardFooterChart: {
    borderTop: "1px solid #eee",
    position: 'relative',
    top: 20,
  },
  warningCardFooter: {
    color: "#FFFFFF",
    "&": {
      ...warningCardHeader
    }
  },
  successCardFooter: {
    color: "#FFFFFF",
    "&": {
      ...successCardHeader
    }
  },
  dangerCardFooter: {
    color: "#FFFFFF",
    "&": {
      ...dangerCardHeader
    }
  },
  infoCardFooter: {
    color: "#FFFFFF",
    "&": {
      ...infoCardHeader
    }
  },
  primaryCardFooter: {
    color: "#FFFFFF",
    "&": {
      ...primaryCardHeader
    }
  },
  roseCardFooter: {
    color: "#FFFFFF",
    "&": {
      ...roseCardHeader
    }
  }
};

export default cardFooterStyle;
