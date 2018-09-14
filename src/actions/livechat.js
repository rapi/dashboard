import {send,hook} from './ws'
let _onMessage=()=>{}
export function connect(){
  console.log('subscribe')
  send('livechat',{action:'enter'})
  hook('livechat',(msg)=>{
    receiveMessage(msg.text)
  })
}

export function onMessage(fn){
  _onMessage=fn
}
export function receiveMessage(message){
    _onMessage(message)
}
export function sendMessage(message){
  send('livechat', {
    action: 'message',
    message: message
  })
}
