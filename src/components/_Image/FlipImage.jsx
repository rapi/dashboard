import React from 'react';
import Image from './Image'
import styles from 'assets/jss/_components/flipImage'


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


class FlipImage extends React.Component {
  flipped=false
  constructor(props){
    super(props)
    this.current=this.props.src
  }
  render() {
    const {classes}=this.props
    // console.log([this.current,this.next],)
    this.switch()
    return <div className={classes.flip} style={{
        width:this.props.size,
        height:this.props.size
      }}>
        <div className={classes.flipFront+(this.flipped?' '+classes.flipBackFliped:'')}>
          <Image src={this.current} style={{
                'maxHeight':this.props.size,
                'maxWidth':this.props.size
              }} alt={this.props.alt}/>
        </div>
        <div className={classes.flipBack+(this.flipped?' '+classes.flipFrontFliped:'')}>
          <Image src={this.next}  style={{
                'maxHeight':this.props.size,
                'maxWidth':this.props.size
              }} alt={this.props.alt}/>
        </div>
    </div>
  }
  switch(){
    this.flipped=!this.flipped
    if(this.flipped)
      this.next=this.props.src
    else
      this.current=this.props.src
  }
}
export default withStyles(styles)(FlipImage)
