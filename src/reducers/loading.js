import {
  LOADING
} from 'constants/loading'
export default function loading(state=true,action){
  switch (action.type) {
    case LOADING: return action.payload
    default: return state
  }
}
