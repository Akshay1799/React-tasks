import { useState } from "react";
import "../../src/App.css";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editText, setEditText] = useState("");

  const handleTodos = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, isEditing: false }]);
    setTask("");
  };

  const handleEdit = (id, currentText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
    setEditText(currentText);
  };

  const handleSave = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText, isEditing: false } : todo
      )
    );
    setEditText("");
  };

  const handleCancel = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
    setEditText("");
  };

  return (
    <div className="flex gap-3 justify-center items-center flex-col mt-10">
      <div className="flex gap-3 justify-center">
        <input className="border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400" type="text" placeholder="Add task..." value={task} onChange={(e) => setTask(e.target.value)}/>
        <button onClick={handleTodos} className="bg-blue-500 text-white text-2xl px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-blue-600">+</button>
      </div>

      <ul className="mt-4 w-full max-w-md">
        {todos.length > 0 &&
          todos.map((todo) => (
            <li key={todo.id}className="border my-2 px-4 py-2 flex justify-between items-center rounded-lg">
              {todo.isEditing ? (
                <>
                  <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className="bg-gray-100 px-2 py-1 outline-none focus:ring-2 focus:ring-blue-400"/>
                  <div className="flex gap-2">
                    <button onClick={() => handleSave(todo.id)} className="hover:cursor-pointer text-green-600 font-semibold ">Save</button>
                    <button onClick={() => handleCancel(todo.id)}className="hover:cursor-pointer text-gray-500 font-semibold ">Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <span className="font-medium">{todo.text}</span>
                  <div className="flex gap-3">
                    <button onClick={() => handleEdit(todo.id, todo.text)} className="hover:cursor-pointer text-blue-600 font-semibold ">
                      Edit
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
