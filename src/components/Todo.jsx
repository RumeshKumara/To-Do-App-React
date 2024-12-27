// import React from 'react'
import calendar from '../assets/calendar.png'

const Todo = () => {
  return (
    <>
    <div className="bg-white place-self-center w-11/12 flex flex-col max-w-md p-7 min-h-[550px] rounded-xl">

    {/* ----- title ----- */}

      <div className="flex items-center justify-center gap-2 mt-7">
        <img className='w-9' src={calendar} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
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
