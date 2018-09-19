import store from 'store/index.js'
let chanel=false,
    subscribeQueue=[],
    hooks=[]

export function connect(){
  if(chanel.close)
    chanel.close()
  chanel=new WebSocket("ws://"+process.env.REACT_APP_WS_SERVER+'/'+store.getState().user.session);
  chanel.onclose=()=>{
    setTimeout(connect,2000)
  }
  chanel.onmessage=function(msg){
    msg=JSON.parse(msg.data)
    for(let h of hooks)
      if(msg.module===h.module)
        h.fn(msg.data)
  }
  chanel.onopen=function(){
    for(let i in subscribeQueue){
      send(subscribeQueue[i].module,subscribeQueue[i].data);
    }
  }
}

export function hook(module,fn){
  hooks.push({module:module,fn:fn})
}
export function send(module,data){
  if(!chanel)connect();

  let obj={module:module,data:data}
  if(!chanel.readyState)
    subscribeQueue.push({module:module,data:data})
  else
    chanel.send(JSON.stringify(obj));
}
