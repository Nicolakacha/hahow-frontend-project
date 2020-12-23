import styled from 'styled-components';
import { CounterButton } from '../components';

const AbilityWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const AbilityTitle = styled.h3`
  margin-right: 40px;
  width: 10%;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 22px;
`;

const PointCounter = styled.div`
  display: flex;
  align-items: center;
`;

const Point = styled.div`
  margin: 0 20px;
  width: 20px;
  text-align: center;
  font-size: 22px;
`;

const AbilityBox = ({
  abilityName,
  abilityPoint,
  handlePlusPoint,
  handleMinusPoint,
}) => {
  return (
    <AbilityWrapper>
      <AbilityTitle>{abilityName}</AbilityTitle>
      <PointCounter>
        <CounterButton onClick={() => handlePlusPoint(abilityName)}>
          ➕
        </CounterButton>
        <Point>{abilityPoint}</Point>
        <CounterButton onClick={() => handleMinusPoint(abilityName)}>
          ➖
        </CounterButton>
      </PointCounter>
    </AbilityWrapper>
  );
};

export default AbilityBox;
