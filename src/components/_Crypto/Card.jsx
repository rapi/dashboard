import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import style from 'assets/jss/_components/cryptoCard.jsx'
import Image from 'components/_Image/Image'
import Line from 'components/_Charts/LinePopover'
const CryptoCard =(props)=>{
  const {
    // isFetching,
    dailyHistory,
    from,
    to,
    logo,
    error,
  }=props.data
  const {classes}=props
  if(error) return 'Error'
  return <div className={classes.CryptoCard} >
    <div className={classes.CryptoCardHeader}>
      <div classes={classes.CryptoCardLogos}>
          {logo.map((e,i)=><Image key={i} alt={from+to} width={70} src={'crypto/'+e}/>
          )}
      </div>
      <div>
        <h5>
        {from}/{to}
        </h5>
      </div>
    </div>
    <Line data={dailyHistory}/>
  </div>
}

export default withStyles(style)(CryptoCard);
