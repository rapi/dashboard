import React from 'react'
import {scaleLinear} from 'd3-scale'
import {transition} from 'd3-transition'
import {select} from 'd3-selection'
import {max,min} from 'd3-array'
import {axisBottom,axisLeft} from 'd3-axis'

export default class Base extends React.Component{
  nodePath=[]
  constructor(props){
    transition()
    super(props);
    this.state={}
    // console.log(props.data);
    this.state.margin= {top: 20, right: 10, bottom: 30, left: 10};
    this.state.width=320-this.state.margin.left-this.state.margin.right;
    this.state.height=150-this.state.margin.top-this.state.margin.bottom;
  }
  //group of root elements
  root=false
  //path of line element
  linePath=false
  lineColor='#fff'
  strokeSize=3
  make_x_gridlines=()=>axisBottom(this.x())
                          .ticks(5)

  // gridlines in y axis function
  make_y_gridlines=()=>axisLeft(this.y())
                          .ticks(5)
  x=()=>scaleLinear()
      .domain([this.props.data[0].time,this.props.data.slice(-1)[0].time])
      .rangeRound([0,this.state.width])
  y=()=>scaleLinear()
    .domain([min(this.props.data,(e)=>e.close),max(this.props.data,(e)=>e.close)])
    .rangeRound([this.state.height,0])
  updateGrid=()=>{
    this.gridY
        .attr("transform", "translate(0," + this.state.height + ")")
        .call(this.make_x_gridlines()
              .tickSize(-this.state.height)
              .tickFormat(""))
    this.gridX
      .call(this.make_y_gridlines()
      .tickSize(-this.state.width)
      .tickFormat("")
    )
  }
  setUpGrid=()=>{
    this.gridG=select(this.nodeGroup)
      .append('g')
      .attr('class',this.props.classes.GraphGrid)
      this.gridX=  this.gridG
      .append('g')
      .attr('class',this.props.classes.GraphGridX)
    this.gridY=this.gridG
      .append('g')
      .attr('class',this.props.classes.GraphGridY)
  }
  draw=()=>{
    this.setUpGrid()
    this.insertElements()
  }
  setWidth=()=>{
    let parent;
    if(this.node.parentNode)
      parent=this.node.parentNode
    else
      parent=this.node.node
    this.setState({
      ...this.state,
      width:parent.offsetWidth-this.state.margin.left-this.state.margin.right
    })
  }
  componentDidUpdate=()=>{
    if(this.props.data.length>0){
      this.updateGrid()
      this.setPath()
    }
  }
  init(){
    if(this.props.data.length>0){
      this.setWidth()
      window.addEventListener("resize", ()=>this.setWidth());
      this.draw()
      this.setPath()
    }

  }
  componentDidMount=()=>{
    this.init()
  }
  insertElements(){
    for(let i in this.elements)
          this.nodePath.push(
            select(this.nodeElements)
              .append(this.elements[i].type)
          )
  }
setPath() {
  for (let i in this.nodePath) {
    for (let j in this.elements[i].attr)
      if (typeof this.elements[i].attr[j] === 'function')
        this.nodePath[i]
        .transition()
        .attr(j, this.elements[i].attr[j]()(this.props.data))
      else
        this.nodePath[i].attr(j, this.elements[i].attr[j])
      for (let j in this.elements[i].on){
        this.nodePath[i].on(j, this.elements[i].on[j])
      }
  }

}
svg=(classes)=><svg
    className={classes.BaseGraph}
    width = '100%'
    height = {this.state.height+this.state.margin.top+this.state.margin.bottom}
    ref = {(ref)=>this.node=ref}
>
<g
  transform={"translate(" + this.state.margin.left + "," + this.state.margin.top + ")"}
  ref = {(ref)=>this.nodeGroup=ref}

  >
  <g   ref = {(ref)=>this.nodeElements=ref}>
 </g>

</g>
</svg>
  render(){
      const {classes}=this.props
      return this.svg(classes);
  }
}
