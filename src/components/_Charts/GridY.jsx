import React from 'react'
import {axisLeft}  from 'd3-axis'
import {select} from 'd3-selection'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

import GridYStyles from "assets/jss/_components/chartsGridY";

class GridY extends React.Component{
  yAxis=()=>axisLeft(this.props.y())
      // .tickSizeInner(-this.props.width)
      .ticks(6)
      .tickSize(-this.props.width)
      // .tickSizeOuter(100);

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
        [classes.gridY]:true,
        [classes.gridYwhite]:color,
    })
    return <g className={chartClasses} ref={(ref)=>this.node=ref}>
    </g>
  }
}
export default withStyles(GridYStyles)(GridY)
