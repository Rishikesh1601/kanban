import React from "react";
import { useTaskStore } from "../store";
import TaskCard from "./TaskCards";

const KanbanBoard: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const moveTask = useTaskStore((state) => state.moveTask);

  const handleAddTask = () => {
    const title = prompt("Enter task title:");
    if (title) {
      addTask(title, "planned");
    }
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <h2 className="text-lg font-bold mb-4">
          All Planned tasks will be shown here
        </h2>
        {tasks
          .filter((task) => task.category === "planned")
          .map((task) => (
            <TaskCard key={task.id} task={task} onMove={moveTask} />
          ))}
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded mt-4"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <div className="w-1/3 p-4">
        <h2 className="text-lg font-bold mb-4">
          All Ongoing tasks will be shown here
        </h2>
        {tasks
          .filter((task) => task.category === "ongoing")
          .map((task) => (
            <TaskCard key={task.id} task={task} onMove={moveTask} />
          ))}
      </div>
      <div className="w-1/3 p-4">
        <h2 className="text-lg font-bold mb-4">
          All completed tasks will be shown here
        </h2>
        {tasks
          .filter((task) => task.category === "done")
          .map((task) => (
            <TaskCard key={task.id} task={task} onMove={moveTask} />
          ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
