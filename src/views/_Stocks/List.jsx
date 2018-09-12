import React from "react";
import {connect} from 'react-redux'
// @material-ui/core
// import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {getStockList} from 'actions/stocks'
import Card from 'components/_SymbolCard/Card'
import CardHeader from 'components/_SymbolCard/CardHeader'
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Image from "components/_Image/Image.jsx";
import Line from 'components/_Charts/LinePopover'


import Loader from 'components/_Loader/Circle'
class ListStocks extends React.Component {
  constructor(props){
    super(props)
    this.fetchNext=this.fetchNext.bind(this)
  }
  state={
    page:0
  }
  fetchNext(){
    let newState={
      ...this.state,
      page:this.state.page+1
    }
    console.log(newState)
    this.props.fetch(newState)
    this.setState(newState)
  }
  componentDidMount(){
    this.props.fetch(this.state)
  }
  render() {
    const { list,isFetching } = this.props;
    if(isFetching)return <Loader absolute/>
    return <div>
      <GridContainer  justify="center">{
        Object.keys(list).map((e,i)=>(
            <GridItem key={i} xs={12} sm={6} md={3}>
              <Card>
                <CardHeader left={<Image src={'stocks/'+list[e].logo} width={80} alt={e}/> } right={<h5>{e}</h5>}/>
                <Line data={list[e].dailyHistory}/>
              </Card>
            </GridItem>)
          )
      }</GridContainer>
      <GridContainer  justify="center">
        <GridItem xs={1} sm={1} md={1}>
          <Button color="info" justIcon round onClick={this.fetchNext}>
            <ExpandMore/>
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  }
}
const state=(state)=>({
  isFetching:state.stocks.isFetching,
  list:state.stocks.list
})
const dispatch=(dispatch)=>({
  fetch:(filter)=>dispatch(getStockList(filter))
})
export default connect(state,dispatch)(ListStocks);
