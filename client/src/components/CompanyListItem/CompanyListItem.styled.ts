import styled from 'styled-components';

export const Styled = styled.li`
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

  @media (max-width: 540px) {
    span {
      width: 15%;
      font-size: 14px;
    }
  }
`;
