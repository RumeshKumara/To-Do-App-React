// import React from 'react'
import check from '../assets/check.png';
// import record-button from '../assets/record-button.png';
import trash from '../assets/trash.png';


const TodoItems = () => {
  return (
    <>
    <div className="flex items-center gap-2 my-3">
        <div className='flex items-center flex-1 cursor-pointer'>
            <img className='w-7' src={check} alt="" />
            <p className='text-slate-200 ml-4 text[17px]'>
                Learning Code
            </p>
        </div>

        <img className='w-5' src={trash} alt="" />
      
    </div>
    <hr className='my-4 border-t-2 border-gray-500' />
    </>
  )
}

export default TodoItems
