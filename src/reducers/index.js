
import { combineReducers } from 'redux'
import crypto from './crypto'
import stocks from './stocks'
import symbols from './symbols'
import loading from './loading'
import notifications from './notifications'
import user from './user'
const rootReducer = combineReducers({
  user,
  stocks,
  crypto,
  symbols,
  loading,
  notifications,
});
export default rootReducer;
