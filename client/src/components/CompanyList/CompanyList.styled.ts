import styled from 'styled-components';

export const Styled = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: flex;
      justify-content: space-between;
      border: solid rgb(175, 175, 175);
      border-width: 0 0 2px 0;
      span {
        width: 20%;
        padding: 5px;
        button {
          font-weight: bold;
          padding: 5px 15px;
          border-style: solid;
          border-radius: 20px;
        }
      }
      b {
        width: 25%;
        padding: 10px;
        font-size: 18px;
        button {
          font-weight: bold;
          padding: 7px;
          border-style: solid;
          border-radius: 20px;
        }
      }
    }
  }
`;
