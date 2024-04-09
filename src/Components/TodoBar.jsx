import React, {useState} from 'react'

const TodoBar = () => {

  const handleChange = (event) => {
    

  }

  return (
    <form className='flex justify-center items-center'>
      <input type="text" placeholder='Add new list item' onChange={handleChange} className='border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-400 w-[550px] placeholder:text-black'/>
      <button type='submit' className='bg-blue-500 text-white px-5 py-3 rounded-md ml-2'>Add</button>
    </form>
  )
}

export default TodoBar