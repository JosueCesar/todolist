import md5 from 'js-md5';
import React, { createContext, useCallback, useState } from 'react';
import { useContext } from 'react';

export interface TaskProps {
  id: string;
  task: string;
  pending: boolean;
}

interface TasksContextProps {
  tasks: TaskProps[];
  addTask(name: string): void;
  removeTask(id: string): void;
  handlePending(id: string): void;
}

const TasksContext = createContext<TasksContextProps>({} as TasksContextProps);

const TasksProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const addTask = useCallback((name: string) => {
    if(!name) throw new Error('Invalid name.')
    setTasks(oldState => [...oldState, {
      id: md5(name + new Date().getTime()),
      task: name,
      pending: true,
    }])
  }, []);

  const removeTask = useCallback((id: string) => {
    setTasks(oldValue => oldValue.filter(task => task.id !== id));
  }, []);

  
  const handlePending = useCallback((id: string) => {
    setTasks(oldState => oldState.map(task => task.id === id ? { ...task, pending: !task.pending } : task))
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, handlePending }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = (): TasksContextProps => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTasks must be used with an TasksProvider');
  }

  return context;
};

export { TasksProvider, useTasks };