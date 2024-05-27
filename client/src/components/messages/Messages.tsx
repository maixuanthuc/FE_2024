import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
const Messages = () => {
  return (
    <div className='overflow-auto'>
      <Message />
        <Message />
        <Message />
        <MessageInput/>
    </div>
  )
}

export default Messages
