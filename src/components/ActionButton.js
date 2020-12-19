import styled from 'styled-components';

const ActionButton = styled.button`
  margin-top: 20px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px 30px;
  background-color: #81559a;
  font-size: 18px;
  :hover {
    filter: brightness(130%);
  }
`;

export default ActionButton;
