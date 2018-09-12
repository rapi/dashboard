import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import style from 'assets/jss/_components/symbolCard.jsx'
// import Image from 'components/Image/Image'
const SymbolCard =(props)=>{

  const {classes,children}=props
  return <div className={classes.SymbolCard} >
    {children}
  </div>
}

export default withStyles(style)(SymbolCard);
