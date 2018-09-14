import React from 'react'
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import stocksCardStyle from "assets/jss/_views/stockCard";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/_Card/CardFooter.jsx";
import FlipImage from "components/_Image/FlipImage"

//Chart
import Line from 'components/_Charts/Line'
class StocksCard extends React.Component {

  render() {
    let el=this.props.element
    if(!el)return 'Loading'
    const name=el.name,
          logo=el.logo,
          data=el.dailyHistory,
          price=data.slice(-1)[0].close
    const {
      classes
    } = this.props;
    return <Card>
      <CardHeader color="warning" stats icon>
        <CardIcon >
          <FlipImage size={70} src={'stocks/'+logo} alt={name}/>
        </CardIcon>
        <p className={classes.cardCategory}>{name}</p>
        <h3 className={classes.cardTitle}>
          {price}
          <small>$</small>
        </h3>
      </CardHeader>
      <CardFooter chart>
        <Line data={data}/>
      </CardFooter>
    </Card>
  }
}
StocksCard.propTypes = {
  classes: PropTypes.object.isRequired,
  random: PropTypes.bool,
}
const state=(state,props)=>{
  return {
  element:state.stocks.list[props.name]
}}
const dispatch=(dispatch)=>({})
export default withStyles(stocksCardStyle)(connect(state,dispatch)(StocksCard))
