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

export const ListContainer = styled.div`

  p {
    margin: 0;
    padding: 0 10px;
    color: #666;
    font-size: 17px;
    height: 23px;
  }

  ul{
    list-style-type: none;
  }

  ul li {
    display: flex;
    flex-direction: row;
    font-size: 16px;
  }

  ul li span {
    flex: 1;
    color: #333;
  }

  ul li button {
    border: none;
    margin: 0 5px;
    padding: 0 5px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
  }
  
  ul li button#conclude:hover {
    color: #00a8ff;
    cursor: pointer;
  }

  ul li button#delete {
    font-size: 18px;
  }

  ul li button#delete:hover {
    color: #eb4d4b;
    cursor: pointer;
  }

`;
