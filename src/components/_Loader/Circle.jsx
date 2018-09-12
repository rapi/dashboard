import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
// import progressStyle from 'assets/jss/material-dashboard-pro-react/components/progress'
import CircularProgress from '@material-ui/core/CircularProgress';

function CyrcleLoader({...props}){
      const {classes}=props
      return  <CircularProgress className={classes.progress+' '+(props.absolute?classes.progressAbsolute:'')} />
}
export default withStyles({})(CyrcleLoader);
