
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoItem = ({ task, index, onToggle, onDelete, onEdit }) => {
  return (
    <li className={task.done ? "checked" : ""}>
      <span>{task.text}</span>
      <div className="task-actions">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(index)}
        />
        <button className="edit-btn" onClick={() => onEdit(index)}>
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => onDelete(index)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
