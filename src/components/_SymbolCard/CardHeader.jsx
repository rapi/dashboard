import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import style from 'assets/jss/_components/symbolCard.jsx'

const SymbolCard =(props)=>{
  const {classes,left,right}=props
  return     <div className={classes.SymbolCardHeader}>
        <div classes={classes.SymbolCardLogos}>
          {left}
        </div>
        <div>
          {right}
        </div>
      </div>
}

export default withStyles(style)(SymbolCard);
