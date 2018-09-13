import React from "react";
import {connect} from 'react-redux'
// @material-ui/core
// import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {getStockList} from 'actions/stocks'
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import StockCard from './Card'
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
              <StockCard list={list} name={e}/>
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
