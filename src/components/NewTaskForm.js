import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const categoryOptionElement = categories.map(category => (
    <option
      key={category}
      >{category}</option>
  ))

  const handleDetailsChange = e => setText(e.target.value)
  const handleCategoryChange = e => setCategory(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const newTask = {text, category}
    onTaskFormSubmit(newTask)
  }
  
  return (
    <form 
      className="new-task-form"
      onSubmit={handleSubmit}
    >
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={text} 
          onChange={handleDetailsChange}
          />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          {categoryOptionElement}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
