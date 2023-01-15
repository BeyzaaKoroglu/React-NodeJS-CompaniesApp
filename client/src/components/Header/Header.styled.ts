import styled from 'styled-components';

export const Styled = styled.div`
  background-color: rgb(30, 66, 115);
  color: white;
  display: flex;
  justify-content: space-between;
  div {
    width: 500px;
    margin: 0 50px;
    a {
      h2 {
        float: left;
        padding: 10px 20px;
        margin: 10px;
        color: white;
      }
    }
    &.navigation {
      a {
        h3 {
          float: left;
          width: 20%;
          border-color: black;
          margin-left: 2px;
          color: white;
          &.active {
            text-decoration-line: underline;
          }
        }
      }
      button {
        width: 25%;
        border-radius: 25px;
        font-weight: bold;
        font-size: 18px;
        margin: 15px 15px;
        background-color: transparent;
        border: 2px solid white;
        color: white;
      }
    }
  }
`;
