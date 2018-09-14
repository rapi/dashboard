import React from 'react'

//Chat widget
import { Widget ,addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

//Actions
import { connect,sendMessage,onMessage } from 'actions/livechat';

class LiveChat extends React.Component{
  componentDidMount(){
    connect()
    onMessage(addResponseMessage)
  }
  render(){
    return <div
    style={{position:'absolute',zIndex:10000}}
    >
      <Widget
        handleNewUserMessage={sendMessage}
      />
    </div>
  }
}
export default LiveChat;
