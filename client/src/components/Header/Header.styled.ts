import styled from 'styled-components';

export const Styled = styled.div`
  background-color: rgb(30, 66, 115);
  color: white;
  display: flex;
  justify-content: space-between;
  div {
    width: 350px;
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
          width: 30%;
          border-color: black;
          margin-left: 2px;
          color: white;
          &.active {
            text-decoration-line: underline;
          }
        }
      }
    }
  }
`;
