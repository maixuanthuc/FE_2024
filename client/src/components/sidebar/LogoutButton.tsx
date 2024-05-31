import React from 'react'
import { CiLogout } from "react-icons/ci";
const LogoutButton = () => {
  return (
    <div className='flex items-end mt-auto  cursor-pointer '>
      <div className=''>
        <CiLogout />
      </div>
      <p className='ml-2 text-sm ' >Đăng xuất</p>
    </div>
  )
}

export default LogoutButton