import {
  NOTIFICATION_ADD,
  NOTIFICATION_REMOVE,
} from 'constants/notifications'

import NotificationImportant from "@material-ui/icons/NotificationImportant";
import Done from "@material-ui/icons/Done";
import Warning from "@material-ui/icons/Warning";
import Error from "@material-ui/icons/Error";
import Feedback from "@material-ui/icons/Feedback";

export const info=    (text,cooldown=false)=>addNotification(text,'info',cooldown,NotificationImportant)
export const success= (text,cooldown=false)=>addNotification(text,'success',cooldown,Done)
export const warning= (text,cooldown=false)=>addNotification(text,'warning',cooldown,Warning)
export const danger=  (text,cooldown=false)=>addNotification(text,'danger',cooldown,Error)
export const primary= (text,cooldown=false)=>addNotification(text,'primary',cooldown,Feedback)

export const addNotification=(text,type='primary',cooldown=false,icon=false)=>(dispatch,state)=>{
  const obj={
      text:text,
      type:type,
  };
  if(icon)
    obj.icon=icon
  dispatch(pushNotification(obj))
  if(cooldown)
    setTimeout(()=>dispatch(removeNotification(state().notifications.length-1)),cooldown*1000);
}


export function pushNotification(notification){
  return {type: NOTIFICATION_ADD, payload:notification }
}
export const removeNotification = (id) =>({type: NOTIFICATION_REMOVE, payload: id})
