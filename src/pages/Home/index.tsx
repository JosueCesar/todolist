/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import Form from '../../components/FormComponent';
import List from '../../components/ListComponent';
import { useTasks } from '../../hooks/tasks';
import { Container } from '../../styles/Styles';

const Home: React.FC = () => {
  const { tasks, addTask, removeTask, handlePending } = useTasks();

  return (
    <Container>
      <Form
        initialValues={{ task: '' }}
        handleSubmit={({ task }) => addTask(task)}
      />

      <hr />

      <List
        title='To do'
        titleIcon=""
        deleteTask={removeTask}
        concludeTask={handlePending}
        tasks={tasks.filter(task => task.pending)}
      />

      <List
        title='Done'
        titleIcon=""
        deleteTask={removeTask}
        concludeTask={handlePending}
        tasks={tasks.filter(task => task.pending === false)}
      />
    </Container>
  );
};

export default Home;