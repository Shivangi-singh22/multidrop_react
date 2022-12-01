import React from 'react';
import 'react-chatbox-component/dist/style.css';
import {ChatBox} from 'react-chatbox-component';

const Chatbox = () => {
    const messages = [
        {
          "text": "Hello there",
          "id": "1",
          "sender": {
            "name": "Ironman",
            "uid": "user1",
          },
        },
      ]
       
      const user = {
        "uid" : "user1"
      } 

  return (
      <ChatBox
        messages={messages}
        user={user}
      />
  )
}

export default Chatbox
