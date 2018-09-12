export default {
  flip: {
    display:'inline'
  },
  flipFront: {
    position: 'absolute',
    transform: 'perspective(600px) rotateX(0deg)',
    '-webkit-transform': 'perspective(600px) rotateY(0deg)',
    transition: 'transform .6s linear 0s',
    'backface-visibility': 'hidden',
  },

  flipBack: {
    position: 'absolute',
    transform: 'perspective(600px) rotateX(180deg)',
    'backface-visibility': 'hidden',
    transition: 'transform .6s linear 0s',
  },
  flipBackFliped: {
    transform: 'perspective(600px) rotateX(-180deg)'
  },
  flipFrontFliped: {
    transform: 'perspective(600px) rotateX(0deg)'
  }

}
