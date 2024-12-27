// import React from 'react'
import calendar from '../assets/calendar.png'

const Todo = () => {
  return (
    <>
    <div className="backdrop-blur-2xl shadow-md bg-slate-500/30 place-self-center w-11/12 flex flex-col max-w-md p-7 min-h-[550px] rounded-xl">

    <div className='flex items-center gap-2'>
      <div className='w-3 h-3 bg-[#FF605C] rounded-full'></div>
      <div className='w-3 h-3 bg-[#FFBD44] rounded-full'></div>
      <div className='w-3 h-3 bg-[#00CA4E] rounded-full'></div>
    </div>

    {/* ----- title ----- */}

      <div className="flex items-center justify-center gap-2 mt-7">
        <img className='w-9' src={calendar} alt="" />
        <h1 className="text-3xl font-semibold text-gray-200">To-Do List</h1>
      </div>

    {/* ----- input box ----- */}

      <div className='flex items-center bg-gray-200 rounded-full my-7'>
        <input className='flex-1 pl-16 pr-2 bg-transparent border-0 outline-none h-14 placeholder:text-slate-600' type="text" placeholder='Add your text' />
        <button className='w-32 text-lg font-medium text-white bg-blue-700 border-none rounded-full cursor-pointer h-14'>ADD +</button>
      </div>




    </div>
    </>
  )
}

export default Todo
