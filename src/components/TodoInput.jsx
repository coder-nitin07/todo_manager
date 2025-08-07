
const TodoInput = ({ todoText, setTodoText, handleAddTodo }) => {
  return (
    <div className="flex items-center gap-2 mt-6">
        <input
            type='text'
            placeholder="Enter a todo"
            value={ todoText }
            onChange={(e)=> setTodoText(e.target.value) }
            className="border border-gray-300 px-4 py-2 rounded w-full"
        />

        <button
            onClick={ handleAddTodo }
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 whitespace-nowrap"
        >
            Add Todo
        </button>
    </div>
  )
}

export default TodoInput;