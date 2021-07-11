import React from 'react';
import { TasksProvider } from './tasks';

const AppProvider: React.FC = ({ children }) => {
  return (
    <TasksProvider>
      {children}
    </TasksProvider>
  );
}

export default AppProvider;