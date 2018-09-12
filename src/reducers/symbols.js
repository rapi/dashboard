import {
  SYMBOLS_LOADING
} from 'constants/symbols'
export default function symbols(state={
    loading:false,
    list:[]
  },action){
  switch (action.type) {
    case SYMBOLS_LOADING: return {...state,loading:action.payload}
    default: return state
  }
}
