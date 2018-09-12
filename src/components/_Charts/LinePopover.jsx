import React from 'react'
import {line} from 'd3-shape'
import Base from './Base'
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import style from 'assets/jss/_components/chartsBase.jsx'
import {select,mouse} from 'd3-selection'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody'
var moment = require('moment');
class Line extends Base{
  grid=[]
  elements=[
      {
        type:'path',
        attr:{
          fill:'none',
          stroke:'white',
          'stroke-width':2,
          d:()=>line()
          .x((d)=>this.x()(d.time))
          .y((d)=>this.y()(d.close))
        }
      },
    ]
    popover(obj){
      this.setState({
        ...this.state,
        popover:{
          ...this.state.popover,
          ...obj
        }
      })
    }
    constructor(props){
      super(props);
      this.componentDidMount=()=>{
      select(this.parentDiv)
          .on('mousemove', () => {
            let position=mouse(this.parentDiv)
            let inv=this.x().invert(position[0])
            let i=0
            for (i in this.props.data) {
              if(this.props.data[i].time>new Date(inv))
                break
            }
            this.popover({
              display: true,
              header:this.props.data[i].time,
              body:this.props.data[i].close,
              left:this.x()(this.props.data[i].time),
              top:this.y()(this.props.data[i].close),

            })
          })
          .on('mouseleave', () => {
            this.popover({display: false})
          })
        this.init()
      }
      this.state={
        ...this.state,
        popover:{
          display:false
        }
      }
      this.render=()=>{
        const {classes}=this.props
        return <div  style={{marginBottom:-10,width:'100%'}}ref={(ref)=>this.parentDiv=ref}>
          {this.svg(classes)}
          <Card className={classes.LinePopover} style={{
            display:(this.state.popover.display?'':'none'),
            top:this.state.popover.top,
            left:this.state.popover.left,
          }} >
            <CardHeader >
              {moment(this.state.popover.header).format('YYYY MM DD')}
            </CardHeader>
            <CardBody>
              {this.state.popover.body}
            </CardBody>
          </Card>
        </div>
      }
    }
}
Line.propTypes = {
  data: PropTypes.array,
};
export default withStyles(style)(Line)
