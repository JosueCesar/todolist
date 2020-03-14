import React, { Component } from 'react';
import md5 from 'js-md5';

import Form from '../../components/FormComponent';
import List from '../../components/ListComponent';
import { Container } from '../../styles/Styles';

export default class Main extends Component {
  state = {
    tasks: [],
  }

  componentDidUpdate = (_, prevState) => {
    if(prevState !== this.state.tasks){
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  componentDidMount = () => {
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.setState({ tasks: JSON.parse(tasks) });
    }
  }

  handleSubmit = val => {
    this.setState({
      tasks:
        [ ...this.state.tasks,
          {
            id: md5('' + new Date().getTime()),
            task: val.task,
            pending: true,
          }
        ]
    });
  }

  handleDelete = (id) => {
    this.setState({
      tasks: 
        [ ...this.state.tasks.filter(task => task.id !== id) ],
    });
  }

  handleConclude = (id) => {
    const toConclude = this.state.tasks.filter(task => task.id === id);

    if(toConclude[0].pending === false){
      toConclude[0].pending = true;
    }
    else{
      toConclude[0].pending = false;
    }

    this.setState({
      tasks:
        [ ...this.state.tasks.filter(task => task.id !== id), toConclude[0] ],
    });
  }

  render(){
    return(
      <Container>
        <Form
          initialValues={{ task: '' }}
          handleSubmit={this.handleSubmit}
        />
        <hr/>
        <List
          title='To do'
          deleteTask={this.handleDelete}
          concludeTask={this.handleConclude}
          tasks={ this.state.tasks.filter(
              task => task.pending === true
          )}
        />
        <List
          title='Done'
          deleteTask={this.handleDelete}
          concludeTask={this.handleConclude}
          tasks={ this.state.tasks.filter(
            task => task.pending !== true
          )}
        />
      </Container>
    );
  }
}