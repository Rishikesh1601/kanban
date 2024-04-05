import React from "react";

interface TaskCardProps {
  task: {
    id: number;
    title: string;
    category: "planned" | "ongoing" | "done";
  };
  onMove: (taskId: number, category: "planned" | "ongoing" | "done") => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onMove }) => {
  const handleMove = (category: "planned" | "ongoing" | "done") => {
    onMove(task.id, category);
  };

  return (
    <div className="border rounded p-4 mb-4">
      <h3 className="font-bold">{task.title}</h3>
      <div className="flex justify-between mt-2">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => handleMove("planned")}
          disabled={task.category === "planned"}
        >
          Planned
        </button>
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded"
          onClick={() => handleMove("ongoing")}
          disabled={task.category === "ongoing"}
        >
          Ongoing
        </button>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded"
          onClick={() => handleMove("done")}
          disabled={task.category === "done"}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
