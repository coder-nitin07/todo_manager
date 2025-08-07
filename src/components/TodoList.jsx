
const TodoList = ({ todos, handleDeleteTodo }) => {
  return (
    <div className="mt-4 space-y-2">
        { todos.length === 0 ? (
            <p className="text-gray-500">No Todos yet.</p>
        ) : (
            todos.map((todo, index)=>(
                <div
                    key={ index }
                    className="flex items-center justify-between border p-2 rounded"
                >
                    <span>{ todo.text }</span>

                    <button
                        onClick={()=> handleDeleteTodo(todo.id) }
                        className="text-red-500 hover:text-red-700 font-bold"
                    >
                        ❌
                    </button>
                </div>
            ))
        )}
    </div>
  )
}

export default TodoList;