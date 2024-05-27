import React from 'react'

const SearchButton = () => {
  return (
    <div className='flex items-center mt-4 ml-3' >
        <form>
            <input type="text" placeholder='Tìm kiếm' className='input input-bordered rounded-full' /> 
        </form>
      
    </div>
  )
}

export default SearchButton
