import {useRef, useState, useEffect} from 'react';
import calendar from '../assets/calendar.png';
import TodoItems from './TodoItems';

const Todo = () => {

  

  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : [],
 [
  { id: 1, text: 'Task 1', isComplete: false },
  { id: 2, text: 'Task 2', isComplete: true },
 ]);

  const inputRef = useRef();

  

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if(inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false
    }
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";

  }

  const deleteTodo = (id) => {
    setTodoList((prvTodos)=>{
      return prvTodos.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id) => {
    setTodoList((prvTodos)=>{
      return prvTodos.map((todo) =>{
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }
  const completedCount = todoList.filter((todo) => todo.isComplete).length;

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList])
  
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
        <h1 className="text-3xl font-semibold text-gray-300">To-Do List</h1>
      </div>

    {/* ----- input box ----- */}

      <div className='flex items-center my-6 bg-gray-200 border-2 border-blue-600 border-solid rounded-xl '>
        <input ref={inputRef} className='flex-1 pl-16 pr-2 bg-transparent outline-none rounded-xl h-14 placeholder:text-slate-600' type="text" placeholder='Add your text' />
        <button onClick={add} className='w-32 text-lg font-medium text-white bg-blue-600 border-none rounded-full cursor-pointer h-14'>ADD +</button>
      </div>
      <div className='flex items-center justify-between pb-2'>
      <p className="text-sm font-semibold text-center text-sky-500">Total Tasks: <span className='px-3 py-1 rounded-full text-sky-400 bg-slate-700'>{todoList.length}</span></p>
      <p className="font-sans text-sm font-semibold text-center text-green-500">Completed Tasks: <span className="px-3 py-1 text-green-500 rounded-full bg-slate-700">{completedCount}</span></p>
      </div>

    {/* ----- Todo List ----- */}

    <div>
      
      {todoList.map((item, index) => {
        return (
          <TodoItems 
            key={index} 
            text={item.text} 
            id={item.id}
            isComplete={item.isComplete} 
            deleteTodo={deleteTodo} 
            toggle={toggle}
          />
        )

      })}
      
    </div>





    </div>
    </>
  )
}

export default Todo
