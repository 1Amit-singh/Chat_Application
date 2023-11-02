import React from 'react'
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatPage = (props) => {
    // const chatProps = useMultiChatLogic("4524d1e4-09d6-46cf-9b4b-79a601914541", props.user.username, props.user.secret);
  return (
    <div style={{height: "100vh"}}>
        {/* <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: "100%"}} /> */}

        <PrettyChatWindow
        projectId='4524d1e4-09d6-46cf-9b4b-79a601914541'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: "100%"}} />
    </div>
  )
}

export default ChatPage