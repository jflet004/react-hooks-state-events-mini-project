import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [categoryOption, setCategoryOption] = useState("All")

  const handleDeleteTask = deletedTaskText => setTaskList(taskList.filter(task => task.text !== deletedTaskText))
  const handleAddTask = newTask => setTaskList([...taskList, newTask])

  const tasksOnScreen = taskList.filter(task => categoryOption === "All" || task.category === categoryOption)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        categoryOption={categoryOption}
        onSetCategoryOption={setCategoryOption}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(category => category !== "All")}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList
        tasks={tasksOnScreen}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
