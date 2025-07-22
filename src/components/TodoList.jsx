import  { useState, useEffect } from "react";
import "./Styles/TodoList.css";
import InputForm from "./InputForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed && !tasks.some((t) => t.text.toLowerCase() === trimmed.toLowerCase())) {
      setTasks([...tasks, { text: trimmed, done: false }]);
      setInput("");
    }
  };

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditText(tasks[index].text);
  };

  const handleUpdate = () => {
    const trimmed = editText.trim();
    if (
      trimmed &&
      !tasks.some(
        (t, i) => i !== isEditing && t.text.toLowerCase() === trimmed.toLowerCase()
      )
    ) {
      const updated = [...tasks];
      updated[isEditing].text = trimmed;
      setTasks(updated);
      setIsEditing(null);
      setEditText("");
    }
  };

  const handleDelete = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
    if (index === isEditing) {
      setIsEditing(null);
      setEditText("");
    }
  };

  const handleToggle = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const handleInputChange = (e) => {
    isEditing !== null ? setEditText(e.target.value) : setInput(e.target.value);
  };

  const clearAllTasks = () => {
    setTasks([]);
    setIsEditing(null);
    setEditText("");
  };

  return (
    <div className="page-center">
      <div className="todo-container">
        <h2>My To-Do List</h2>
        <p className="time">{currentTime}</p>

        <InputForm
          isEditing={isEditing}
          input={input}
          editText={editText}
          handleInputChange={handleInputChange}
          handleAdd={handleAdd}
          handleUpdate={handleUpdate}
        />

        <ul className="task-list">
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>

        {tasks.length > 0 && (
          <button className="clear-btn" onClick={clearAllTasks}>
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
