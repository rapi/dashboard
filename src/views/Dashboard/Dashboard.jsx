import React from "react";
import PropTypes from "prop-types";
// react plugin for creating vector maps

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import InfoIcon from "@material-ui/icons/Info";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Info from "components/Typography/Info.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/_Card/CardFooter.jsx";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

import StockCard from 'views/_Stocks/Card'
import CryptoCard from 'views/_Crypto/Card'

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Store />

                </CardIcon>
                <p className={classes.cardCategory}>Stocks</p>
                <h3 className={classes.cardTitle}>
                  8000<small>+</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Info>
                    <InfoIcon />
                  </Info>
                    You can add your symbols
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>storage</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Crypto</p>
                <h3 className={classes.cardTitle}>100<small>+ Pairs</small></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                    <Info>
                      <InfoIcon />
                    </Info>
                    You can add your Crypro Pairs
                </div>
              </CardFooter>
            </Card>
          </GridItem>

        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <StockCard random/>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <StockCard random/>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <CryptoCard random/>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <CryptoCard random/>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
