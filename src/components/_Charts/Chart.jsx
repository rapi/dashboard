import React from 'react'
import PropTypes from 'prop-types'


//d3.js
import {scaleLinear,scaleTime} from 'd3-scale'
import {max,min} from 'd3-array'




// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Loader from "components/_Loader/Circle";


import classNames from "classnames";
import ChartStyles from "assets/jss/_components/charts";

class Chart extends React.Component {
  state={
    width:false,
    height:false,
    margin:{
      right:20,
      left:25,
      top:10,
      bottom:25,
    },
  }
  constructor(props){
    super(props)
    if(props.marginLeft)this.state.margin.left=props.marginLeft
  }
  x=()=>scaleTime()
      .domain([this.props.data[0].time,this.props.data.slice(-1)[0].time])
      .rangeRound([0,this.state.width])
  y=()=>scaleLinear()
    .domain([min(this.props.data,(e)=>e.close),max(this.props.data,(e)=>e.close)])
    .rangeRound([this.state.height,0])

  putProps(el){
    return {
              ...el,
              props:{
                ...el.props,
                x:el.props.x?el.props.x:this.x,
                y:el.props.x?el.props.y:this.y,
                data:el.props.x?el.props.data:this.props.data,
                height:this.state.height,
                width:this.state.width,
                color:this.props.color,
              }
      }
  }
  setSizes(){
    this.setState({
      height:this.node.parentNode.offsetHeight-this.state.margin.top-this.state.margin.bottom,
      width:this.node.parentNode.offsetWidth-this.state.margin.left-this.state.margin.right,
    });

  }
  componentDidMount(){
    this.setSizes()
  }
  render() {
    if(!this.props.data) return <div style={{ width: '10%',margin: 'auto'}}><Loader/></div>

    const {classes,color}=this.props
    const chartClasses=classNames({
      [classes.chart]:true,
      [classes[color]]:color,
    })
    return <svg ref={(ref)=>this.node=ref} className={chartClasses}>
      <g
        transform={"translate(" + this.state.margin.left + "," + this.state.margin.top + ")"}
      >
      {
        (this.state.width && this.state.height)?
          (
            this.props.children.map
            ?this.props.children.map((e,i)=>this.putProps(e))
            :this.putProps(this.props.children)
          )
        :''
      }
      </g>
    </svg>
  }
}
Chart.propTypes = {
  marginLeft: PropTypes.number,
  data: PropTypes.array,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
}
export default withStyles(ChartStyles)(Chart)
