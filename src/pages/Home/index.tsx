/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import md5 from 'js-md5';

import Form from '../../components/FormComponent';
import List from '../../components/ListComponent';
import { Container } from '../../styles/Styles';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

interface TaskProps {
  id: string;
  task: string;
  pending: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleSubmit = useCallback(({ task }: any) => {
    setTasks(oldValue => [
      ...oldValue, {
        id: md5(task + new Date().getTime()),
        task,
        pending: true,
      }
    ]);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTasks(oldValue => oldValue.filter(task => task.id !== id));
  }, []);

  const handleConclude = useCallback((id: string) => {
    setTasks(oldState => oldState.map(task => task.id === id ? { ...task, pending: !task.pending } : task))
  }, [tasks]);

  useEffect(() => {
    let a = new Array(10).fill(0);
    a.forEach((_v, i) =>{
      handleSubmit({ task: 'teste ' + i })
    })
  }, [])

  return (
    <Container>
      <Form
        initialValues={{ task: '' }}
        handleSubmit={handleSubmit}
      />

      <hr />

      <List
        title='To do'
        titleIcon=""
        deleteTask={handleDelete}
        concludeTask={handleConclude}
        tasks={tasks.filter(task => task.pending)}
      />

      <List
        title='Done'
        titleIcon=""
        deleteTask={handleDelete}
        concludeTask={handleConclude}
        tasks={tasks.filter(task => task.pending === false)}
      />
    </Container>
  );
};

export default Home;