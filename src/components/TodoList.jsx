
const TodoList = ({ 
    todos,
    editingId,
    editText,
    handleEditClick,
    handleEditChange,
    handleSaveEdit,
    handleCancelEdit,
    handleDeleteTodo,
    handleToggleComplete
  }) => {
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
                    { editingId === todo.id ? (
                        <>
                            <input
                                value={ editText }
                                onChange={ handleEditChange }
                                className="border px-2 py-1 rounded w-full mr-2"
                            />

                            <button
                                onClick={()=> handleSaveEdit(todo.id) }
                                className="text-green-500 hover:text-green-700 font-bold ml-2"
                            >
                                ✅
                            </button>

                            <button
                                onClick={ handleCancelEdit }
                                className="text-gray-500 hover:text-gray-700 font-bold ml-2"
                            >
                                ❌
                            </button>
                        </>
                      ) : (
                        <>
                            {/* Checkbox and Todo Text */}
                            <div className="flex items-center gap-2 w-full">
                                <input 
                                    type="checkbox"
                                    checked={ todo.completed }
                                    onChange={()=> handleToggleComplete(todo.id) }
                                />

                                <span className={ todo.completed ? 'line-through text-gray-500' : '' }>
                                    { todo.text }
                                </span>
                            </div>


                            {/* Edit and Cancel buttons */}
                            <div className="flex gap-2">
                                 <button
                                    onClick={()=> handleEditClick(todo.id, todo.text) }
                                    className="text-blue-500 hover:text-blue-700 font-bold"
                                >
                                    ✏️
                                </button>

                                 <button
                                    onClick={()=> handleDeleteTodo(todo.id) }
                                    className="text-red-500 hover:text-red-700 font-bold"
                                >
                                    ❌
                                </button>
                            </div>
                        </>
                    ) }
                </div>
            ))
        )}
    </div>
  )
}

export default TodoList;