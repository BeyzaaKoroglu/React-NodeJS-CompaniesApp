import styled from 'styled-components';

export const Styled = styled.div`
  div {
    h2 {
      padding: 10px;
      text-align: left;
      button {
        float: right;
      }
    }
    &.companies {
      display: flex;
      justify-content: space-between;
      div {
        width: 30%;
        background-color: white;
        border: 2px solid rgb(30, 66, 115);
        border-radius: 25px;
        h3 {
          text-decoration-line: underline;
        }
        p {
          text-align: left;
          padding-left: 15px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    div {
      &.companies {
        display: flex;
        flex-wrap: wrap;
        div {
          width: 60%;
          margin: 15px auto;
        }
      }
    }
  }
`;
