import React, { Component } from 'react';
import md5 from 'js-md5';
import Form from '../../components/FormComponent'
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

  render(){
    return(
      <Container>        
        <Form
          initialValues={{ task: '' }}
          handleSubmit={this.handleSubmit}
        />
        <hr/>
      </Container>
    );
  }
}