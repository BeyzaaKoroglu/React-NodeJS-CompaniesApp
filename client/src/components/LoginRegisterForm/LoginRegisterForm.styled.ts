import styled from 'styled-components';

export const Styled = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: rgb(225, 225, 225);
  border: 2px solid rgb(30, 66, 115);
  text-align: center;
  input {
    width: 75%;
    height: 30px;
    border-radius: 10px;
    border: 2px solid rgb(175, 175, 175);
    padding-left: 15px;
    padding-right: 15px;
    margin: 10px 20px;
  }
  select {
    width: 81%;
    height: 30px;
    border-radius: 10px;
    border: 2px solid rgb(175, 175, 175);
    padding-left: 15px;
    padding-right: 15px;
    margin: 10px 20px;
  }
  button {
    width: 150px;
    height: 40px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 18px;
    margin: 25px 15px;
    &.linkBtn {
      border: none;
      background-color: transparent;
      color: rgb(76, 113, 255);
      text-decoration-line: underline;
    }
  }
`;
