import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';

function App() {
  const [ todoText, setTodoText ] = useState('');
  const [ todos, setTodos ] = useState([]);

  const handleAddTodo = () =>{
      if (todoText.trim() === '') return;

      const newTodo = {
          id: Date.now(),
          text: todoText
      };

      setTodos([ ...todos, newTodo ]);
      setTodoText('');
  };

  return (
      <div className='max-w-md mx-auto mt-10 px-4"'>
          <h1 className='text-3xl font-bold text-blue-600 mb-4 text-center'>Todo Manager</h1>

          <TodoInput 
              todoText={ todoText }
              setTodoText={ setTodoText }
              handleAddTodo={ handleAddTodo }
          />
      </div>
  )
}

export default App