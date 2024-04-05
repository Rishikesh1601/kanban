import create from "zustand";

interface Task {
  id: number;
  title: string;
  category: "planned" | "ongoing" | "done";
}

interface TaskStore {
  tasks: Task[];
  addTask: (title: string, category: "planned" | "ongoing" | "done") => void;
  moveTask: (taskId: number, category: "planned" | "ongoing" | "done") => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (title, category) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), title, category }],
    })),
  moveTask: (taskId, category) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, category } : task
      ),
    })),
}));
