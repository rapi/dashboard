import React from 'react'
import PropTypes from "prop-types";

import cryptoCardStyle from "assets/jss/_views/stockCard";

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
class CryptoCard extends React.Component {
  state={
    element:false
  }
  constructor(props){
    super(props);
    this.state.element=props.name
  }
  componentDidMount(){
    if(this.props.random)
      setInterval(()=>this.fetchRandom(this.props.list),4000)
  }
  shouldComponentUpdate(newProps,nextState) {
    if(this.state.element!== nextState.element)
      return true
    this.fetchRandom(newProps.list)
    return false;
  }
  fetchRandom(list){
    let i = Object.keys(list)[parseInt(Math.random() * Object.keys(list).length,0)]
    this.setState({...this.state,element: i})
  }
  render() {
    if(!this.state.element)return 'Loading'
    const name=this.props.list[this.state.element].from+' '+this.props.list[this.state.element].to,
          logo=this.props.list[this.state.element].logo,
          data=this.props.list[this.state.element].dailyHistory,
          price=data.slice(-1)[0].close
    const {
      classes
    } = this.props;
    return <Card>
      <CardHeader color="warning" stats icon>
        <CardIcon >
          <FlipImage size={70} src={'crypto/'+logo} alt={name}/>
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
CryptoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  random: PropTypes.bool,
}

export default withStyles(cryptoCardStyle)(CryptoCard)
