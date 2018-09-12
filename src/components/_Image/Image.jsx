import React from 'react'
import PropTypes from 'prop-types'
function Image ({...props}){
  const {src,alt,...rest} =props;
  return <img
    src={'img/big/'+src}
    alt={alt}
    {...rest}
    />
}
Image.propTypes={
  src:PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired,
  width:PropTypes.number,
  height:PropTypes.number,
  maxWidth:PropTypes.number,
  maxHeight:PropTypes.number,
}
export default Image
