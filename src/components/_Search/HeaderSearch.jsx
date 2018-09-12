import React from 'react'

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle";

import Button from "components/MDCustomButtons/Button.jsx";
import CustomInput from "components/MDCustomInput/CustomInput.jsx";
import Search from "@material-ui/icons/Search";
import withStyles from "@material-ui/core/styles/withStyles";


const HeaderSearch=(props)=>{
  const { classes } = props;
  return   <div className={classes.searchWrapper}>
          <CustomInput
            formControlProps={{
              className: classes.margin + " " + classes.search
            }}
            inputProps={{
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search"
              }
            }}
          />
          <Button color="white" aria-label="edit" justIcon round>
            <Search />
          </Button>
  </div>
}

export default withStyles(headerLinksStyle)(HeaderSearch);
