import {
  // LOADING
} from 'constants/loading'
export default function user(state={},action){
  if(!state.session)
    state.session=Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2)
  switch (action.type) {
    // case LOADING: return action.payload
    default: return state
  }
}
