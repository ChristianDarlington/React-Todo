import React, {useState} from 'react'

const ListItems = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  return (
   <div className='flex items-center justify-center h-32'>
    <ul className='mr-[15vh]'>
      <li>    
          <label className='inline-flex items-center'>
            <input className='h-5 w-5' type="checkbox" onChange={handleCheckboxChange} />
            <span className='ml-4 text-2xl text-md'>New list item</span> 
          </label>       
          <button className='bg-blue-500 p-3 rounded-md w-40 text-white text-lg'>Update</button>
          <button className='bg-blue-500 p-3 rounded-md w-40 text-white text-lg'>Delete</button>
      </li>
      <li></li>
      <li></li>
    </ul>
   </div>
  )
}

export default ListItems