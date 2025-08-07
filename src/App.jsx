import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [ todoText, setTodoText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ editingId, setEditingId ] = useState(null);
  const [ editText, setEditText ] = useState('');

  const handleAddTodo = () =>{
      if (todoText.trim() === '') return;

      // Add new Todo
      const newTodo = {
          id: Date.now(),
          text: todoText,
          completed: false
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

  // Handle the edit button todo functionality
  const handleEditClick = (id, currentText)=>{  
      setEditingId(id); // set the ID that which todo is edited

      setEditText(currentText); // Fill the text with current todo
  };


  // User type inside the field
  const handleEditChange = (e) =>{

      setEditText(e.target.value); // Update the EditText
  };



  const handleSaveEdit = (id) =>{
      if(editText.trim() === '') return;

      // Create a new array 
      const updateTodos = todos.map(todo =>

          todo.id === id ? { ...todo, text: editText } : todo
      );

      // update todo with updated array
      setTodos(updateTodos);
      setEditingId(null);
      setEditText('');
  };


  // todo complete toggle
  const handleToggleComplete = (id) =>{
      const updatedTodos = todos.map(todo =>{
          if(todo.id === id){
              return { ...todo, completed: !todo.completed };
          }

          return todo;
      });

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
              editText={ editText }
              editingId={ editingId }
              handleEditClick={ handleEditClick }
              handleEditChange={ handleEditChange }
              handleSaveEdit={ handleSaveEdit }
              handleDeleteTodo={ handleDeleteTodo }
              handleToggleComplete={ handleToggleComplete }
          />
      </div>
  )
}

export default App