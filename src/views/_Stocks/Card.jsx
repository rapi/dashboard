import React from 'react'
import PropTypes from "prop-types";
import {connect} from  'react-redux'

import stockCardStyle from "assets/jss/_views/stockCard";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/_Card/CardFooter.jsx";
import FlipImage from "components/_Image/FlipImage"
//Actions
import {getStockList} from 'actions/stocks'

//Chart
import Line from 'components/_Charts/LinePopover'
class StockCard extends React.Component {
  state={
    element:false
  }
  componentDidMount(){
    this.props.fetch({})
      .then(()=>this.fetchRandom(this.props.list))
    setInterval(()=>this.fetchRandom(this.props.list),4000)
  }
  shouldComponentUpdate(newProps,nextState) {
    if(this.state.element!== nextState.element)
      return true
    // this.fetchRandom(newProps.list)
    return false;
  }
  fetchRandom(list){
    let i = Object.keys(list)[parseInt(Math.random() * Object.keys(list).length,0)]
    this.setState({...this.state,element: i})
  }
  render() {
    if(!this.state.element)return 'Loading'
    const name=this.props.list[this.state.element].name,
          logo=this.props.list[this.state.element].logo,
          data=this.props.list[this.state.element].dailyHistory,
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
StockCard.propTypes = {
  classes: PropTypes.object.isRequired,
  random: PropTypes.bool,
}
const state = (state,props) => {
  return {
    list:state.stocks.list
  }
}
const dispatch=(dispatch)=>({
  fetch:(filter)=>dispatch(getStockList(filter))
})
export default withStyles(stockCardStyle)(connect(state,dispatch)(StockCard))
