import React from 'react'
import Messages from './Messages'   
import MessageInput from './MessageInput'
const MessageContainer = () => {
  return (
    <div className='flex flex-col w-2/3'>
      <div className='bg-slate-300 px-2 py-3 mb-2 items-center text-center '>
            <span className='label-text'>Tin nhắn tới:  </span>
            <span className='text-gray-500 font-bold'>Mai Xuân Thức</span>
            </div>
        <Messages />
        
    </div>
    

  )
}

export default MessageContainer
