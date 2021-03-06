import React from "react";
import PropTypes from "prop-types";
import {connect} from  'react-redux'
// react plugin for creating vector maps

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";


//Actions
import {getStockList} from 'actions/stocks'
import {getCryptoPairs} from 'actions/crypto'

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
    crypto: [],
    stocks: [],
  };
  timers={}
  componentWillUnmount(){
    for(let i in this.timers)
      clearTimeout(this.timers[i])
  }
  componentDidMount(){
    this.props.cryptoFetch()
      .then(()=>this.fetchRandom('crypto'))
    this.props.stocksFetch()
      .then(()=>this.fetchRandom('stocks'))

  }
  random=(list)=>Object.keys(list)[parseInt(Math.random() * Object.keys(list).length,0)]
  fetchRandom(name){
    this.setState({
      ...this.state,
      [name]:[
        this.random(this.props[name+'List']),
        this.random(this.props[name+'List']),
      ]
    })
    this.timers[name]=setTimeout(()=>this.fetchRandom(name),(parseInt((Math.random() *5),0)+5)*1000)

  }
  render() {
    // console.log(this.state)
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
            <StockCard name={this.state.stocks[0]} />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <StockCard name={this.state.stocks[1]} />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <CryptoCard name={this.state.crypto[0]} />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <CryptoCard name={this.state.crypto[1]} />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
const state = (state,props) => {
  return {
    cryptoList:state.crypto.list,
    stocksList:state.stocks.list,
  }
}
const dispatch=(dispatch)=>({
  cryptoFetch:(filter)=>dispatch(getCryptoPairs(filter)),
  stocksFetch:(filter)=>dispatch(getStockList(filter))
})
export default withStyles(dashboardStyle)(connect(state,dispatch)(Dashboard))
