import React from 'react'
import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form action="" className='px-4 my-3 flex'>
        <div className='w-full'>
        <input type="text" className='border-2 border-gray-200 text-xl rounded block  p-2 bg-white text-white  w-full ' 
        placeholder='Nhập tin nhắn ở đây......'  />
        </div>
        <button type='submit' className=' bg-white rounded-half flex items-center justify-center ml-3 border-2 border-black w-10' >
        <BsSend/  >
        </button>
    </form>
  )
}

export default MessageInput
