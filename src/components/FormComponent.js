import React, { Component } from 'react';

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import { GoPlus } from 'react-icons/go';
import { GoChecklist } from 'react-icons/go';
import { FormContainer } from '../styles/Styles';
import * as yup from 'yup';

const validation = yup.object().shape({
  task: yup.string().min(5).required('Todo name is required') 
});

export default class Form extends Component {
  
  render(){
    const { initialValues, handleSubmit } = this.props;
    return(
      <FormContainer>
        <h1><GoChecklist/>TodoList</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <FormikForm onSubmit={handleSubmit}>
              <Field 
                type='text'
                name='task'
                placeholder='What did you need to do?'
                onChange={handleChange}
                value={values.task}
              />
              <ErrorMessage component='span' name='task' />
              <button type='submit'><GoPlus /></button>
            </FormikForm>
          )}
        </Formik>
      </FormContainer>
    );
  }
}