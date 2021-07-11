import React from 'react';

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import { GoPlus } from 'react-icons/go';
import { GoChecklist } from 'react-icons/go';
import { FormContainer } from '../../styles/Styles';
import * as yup from 'yup';
import { TaskProps } from '../../hooks/tasks';

const validation = yup.object().shape({
  task: yup.string().min(5).required('Todo name is required') 
});

interface FormProps {
  initialValues: any;
  handleSubmit(e: Omit<TaskProps, 'id' | 'pending'>): void;
}

const Form: React.FC<FormProps> = ({ initialValues, handleSubmit }) => {
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
              placeholder='What do you need to do?'
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

export default Form;