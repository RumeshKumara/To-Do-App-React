import { useState } from 'react';
import check from '../assets/check.png';
import recordButton from '../assets/recordButton.png';
import trash from '../assets/trash.png';
import PropTypes from 'prop-types';
import edit from '../assets/edit.png';


const TodoItems = ({text, id, isComplete, deleteTodo, toggle, updateTodo}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(id, updatedText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <>
    <div className="flex flex-wrap items-center gap-2 my-3">
        <div onClick={()=>{toggle(id)}} className='flex items-center flex-1 cursor-pointer'>
            <img className='w-6 cursor-pointer sm:w-6 md:w-7' src={isComplete ? check : recordButton} alt="" />
            {isEditing ? (
              <input 
                type="text" 
                value={updatedText} 
                onChange={(e) => setUpdatedText(e.target.value)} 
                onKeyDown={handleKeyDown}
                className="text-slate-200 ml-4 text[17px] bg-transparent border-b border-slate-400 outline-none"
              />
            ) : (
              <p className={`text-slate-200 ml-4 text[17px] decoration-slate-900 ${isComplete ? "line-through text-slate-400" : ""}`}>
                {text}  
              </p>
            )}
        </div>
        {isEditing ? (
          <button onClick={handleSave} className='w-5 text-green-500 sm:w-4 md:w-5'></button>
        ) : (
          <img onClick={handleEdit} className='w-5 cursor-pointer sm:w-4 md:w-5' src={edit} alt="" />
        )}
        <img onClick={()=>{deleteTodo(id)}} className='w-5 cursor-pointer sm:w-4 md:w-5' src={trash} alt="" />
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
    updateTodo: PropTypes.func.isRequired,
}

export default TodoItems
