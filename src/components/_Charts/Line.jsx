import React from 'react'
import {line} from 'd3-shape'
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

import style from 'assets/jss/_components/chartsLine.jsx'

class Line extends React.Component{
  render(){
    const {classes,color}=this.props
    const chartClasses=classNames({
          [classes.Line]:true,
          [classes.LineWhite]:color,
    })
    return <path className={chartClasses} d={
      (line()
        .x((d)=>this.props.x()(d.time))
        .y((d)=>this.props.y()(d.close)))(this.props.data)

  }/>
  }
}
export default withStyles(style)(Line)
