import {line} from 'd3-shape'
import Base from './Base'
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import style from 'assets/jss/Charts/Base.jsx'

class Line extends Base{
  elements=[
      {
        type:'path',
        attr:{
          fill:'none',
          stroke:'white',
          'stroke-width':2,
          d:()=>line()
          .x((d)=>this.x()(d.time))
          .y((d)=>this.y()(d.close))
        }
      },
    ]

}
Line.propTypes = {
  data: PropTypes.array,
};
export default withStyles(style)(Line)
