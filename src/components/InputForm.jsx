import React from "react";

const InputForm = ({
  isEditing,
  input,
  editText,
  handleInputChange,
  handleAdd,
  handleUpdate,
}) => {
  return (
    <div className="input-area">
      <input
        type="text"
        value={isEditing !== null ? editText : input}
        onChange={handleInputChange}
        placeholder={isEditing !== null ? "Edit task..." : "Add a new task..."}
      />
      <button onClick={isEditing !== null ? handleUpdate : handleAdd}>
        {isEditing !== null ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default InputForm;
