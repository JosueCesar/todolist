import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 60px auto;
  padding: 20px;

  h1, h2 {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #333;
  }

  h2 {
    font-size: 20px;
  }
`;
export const FormContainer = styled.div`
  
  form{
    display: flex;
    flex-direction: row;
  }

  form input {
    flex: 1;
    font-size: 14px;
    border: 1px solid #eeeeee;
    padding: 5px;
    border-radius: 4px;
    z-index: 1;
  }

  form button {
    background-color: #24252a;
    color: #fff;
    border-radius: 4px;
    border: 0;
    margin: 0 5px;
    padding: 0 8px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form button:hover {
    background-color: #555555;
    cursor: pointer;
  }

  form button:active {
    background-color: #777;
  }

  form span {
    color: #eb4d4b;
    display: flex;
    flex-direction: column;
    position: absolute;
    font-size: 14px;
    padding: 28px 5px;
  }
`;
