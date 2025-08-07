import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [ todoText, setTodoText ] = useState('');
  const [ todos, setTodos ] = useState([]);

  const handleAddTodo = () =>{
      if (todoText.trim() === '') return;

      // Add new Todo
      const newTodo = {
          id: Date.now(),
          text: todoText
      };

      // Add the todo 
      setTodos([ ...todos, newTodo ]);

      // blank the input field
      setTodoText('');
  };

  // Delete todo by their ID
  const handleDeleteTodo = (id)=>{
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
  };

  return (
      <div className='max-w-md mx-auto mt-10 px-4"'>
          <h1 className='text-3xl font-bold text-blue-600 mb-4 text-center'>Todo Manager</h1>

          {/* Input and Add Button */}
          <TodoInput 
              todoText={ todoText }
              setTodoText={ setTodoText }
              handleAddTodo={ handleAddTodo }
          />

          <TodoList 
              todos={ todos } 
              handleDeleteTodo={ handleDeleteTodo }    
          />
      </div>
  )
}

export default App