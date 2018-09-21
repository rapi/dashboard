import React from 'react'
import {axisBottom}  from 'd3-axis'
import {select} from 'd3-selection'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

import GridXStyles from "assets/jss/_components/chartsGridX";

class GridX extends React.Component{
  yAxis=()=>axisBottom(this.props.x())
      .ticks(6)
      .tickSize(this.props.height)
  componentDidUpdate(){
    select(this.node)
      .call(this.yAxis())
  }
  componentDidMount(){
      select(this.node)
        .call(this.yAxis())
  }
  render(){

    const {classes,color}=this.props
    const chartClasses=classNames({
        [classes.GridX]:true,
        [classes.GridXwhite]:color,
    })
    return <g className={chartClasses} ref={(ref)=>this.node=ref}>
    </g>
  }
}
export default withStyles(GridXStyles)(GridX)
