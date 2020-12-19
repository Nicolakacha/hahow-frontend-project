import styled from 'styled-components';

const CounterButton = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  padding: 2px;
  background-color: #81559a;
  font-size: 22px;
  :hover {
    filter: brightness(130%);
  }
`;

export default CounterButton;
