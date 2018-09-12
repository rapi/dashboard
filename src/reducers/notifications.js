import {
  NOTIFICATION_ADD,
  NOTIFICATION_REMOVE,
} from 'constants/notifications'
export default function loading(state=[],action){
  switch (action.type) {
    case NOTIFICATION_ADD:    return state.concat([action.payload])
    case NOTIFICATION_REMOVE: return state.filter((_,i)=>i!==action.payload)
    default: return state
  }
}
