import React from 'react'

//Chat widget
import { Widget ,addResponseMessage,toggleWidget,isWidgetOpened } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

//Actions
import { connect,sendMessage,onMessage } from 'actions/livechat';

class LiveChat extends React.Component{
  componentDidMount(){
    connect()
    onMessage((e)=>{
      if(!isWidgetOpened())
        toggleWidget();
      addResponseMessage(e);
    })
  }
  render(){
    return <div
    style={{position:'absolute',zIndex:10000}}
    >
      <Widget
        title='Welcome'
        toggleWidget={()=>true}
        handleNewUserMessage={sendMessage}
      />
    </div>
  }
}
export default LiveChat;
