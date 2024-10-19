import React from 'react'
import { useState } from 'react'

export default function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])
  function handleAdd() {
    if (newTodo.trim() != '') {
      setTodos([...todos, { text: newTodo, isCheck: false }])
      setNewTodo('')
    }
    console.log(todos)

  }
  function handleCheck(i) {
    const updatedTodos = todos.map((task, index) =>
      index === i ? { ...task, isCheck: !task.isCheck } : task
    )
    setTodos(updatedTodos)

  }
  return (
    <div className='w-3/4 m-auto bg-lime-200'>
      <div className='text-center text-3xl font-bold bg-red-300' >
        Eesha Todo List
      </div>
      <div>
        <div>
          <input type='text' onChange={(e) => setNewTodo(e.target.value)} value={newTodo} className='border-2 border-black' />
          <button onClick={handleAdd} className='bg-slate-500 text-white p-3 rounded-xl ml-3'>Add</button>
        </div>
        <div>
          {newTodo}
          <h1 className='text-3xl font-bold my-6'>Our Todos</h1>
          {todos.map((v, i) => (
            <div key={i} className='flex gap-3 my-3 bg-red-300'>
              <input type='checkbox' value={v.isCheck} onChange={() => handleCheck(i)} />
              <div className={v.isCheck ? 'line-through' : ''}>{v.text}</div>
              <div className='flex gap-4'>
                <button className='bg-black p-1 text-white rounded-xl'>edit</button>
                <button className='bg-black p-1 text-white rounded-xl'>remove</button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
