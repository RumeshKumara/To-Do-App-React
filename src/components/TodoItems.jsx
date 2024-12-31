// import React from 'react'
import check from '../assets/check.png';
import recordButton from '../assets/recordButton.png';
import trash from '../assets/trash.png';
import PropTypes from 'prop-types';
import edit from '../assets/edit.png';


const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {

  return (
    <>
    <div className="flex flex-wrap items-center gap-2 my-3">
        <div onClick={()=>{toggle(id)}} className='flex items-center flex-1 cursor-pointer'>
            <img className='w-7' src={isComplete ? check : recordButton} alt="" />
            <p className={`text-slate-200 ml-4 text[17px] decoration-slate-900 ${isComplete ? "line-through text-slate-400" : ""}`}>
                {text}  
            </p>
            
           
        </div>
        <img className='w-5' src={edit} alt="" />

        <img onClick={()=>{deleteTodo(id)}} className='w-5' src={trash} alt="" />
      
    </div>
    <hr className='my-4 border-t-2 border-gray-500' />
    </>
  )
}

TodoItems.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isComplete: PropTypes.bool,
    deleteTodo: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
}

export default TodoItems
