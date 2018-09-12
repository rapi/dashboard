import React from "react";

import List from './List'
// import Add from './Add'
import {
  Route,
} from 'react-router-dom'

class Stocks extends React.Component {
  set(name,value){
    this.setState({
      ...this.state,
      [name]:value
    })
  }
  render() {
    return (
                <div>
                  <Route path='/stock' exact component={List}/>
                </div>
    );
  }
}

export default Stocks;
