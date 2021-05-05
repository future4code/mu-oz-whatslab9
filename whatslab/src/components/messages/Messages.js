import React from 'react';
import Message from '../message/Message'
const Messages = ({messages}) => {
  return (
    <div>
      {messages.map(m => <Message m={m}/> )
      }
      </div>
    )
  }

export default Messages;