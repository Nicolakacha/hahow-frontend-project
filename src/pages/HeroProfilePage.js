import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { MEDIA_QUERY_MD } from '../constants/breakpoint';
import { AbilityBox, ActionButton } from '../components';

const HeroPageWrapper = styled.div`
  margin: 20px auto 0;
  max-width: 800px;
  min-height: fit-content;
  padding: 10px;
  background-color: #34094b;
  box-shadow: 5px 5px 15px 5px #000000;
`;

const HeroName = styled.h2`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 24px;
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 30px;
  ${MEDIA_QUERY_MD} {
    flex-direction: row;
  }
`;

const HeroInfoLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERY_MD} {
    width: 70%;
    height: 100%;
  }
`;

const HeroInfoRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  font-size: 18px;
  ${MEDIA_QUERY_MD} {
    margin: 0;
    justify-content: flex-end;
    width: 30%;
  }
`;

const Description = styled.div``;

const Message = styled.div`
  color: red;
`;

const HeroProfilePage = ({ heroPoint }) => {
  const { heroId } = useParams();
  return (
    <HeroPageWrapper>
      <HeroName>Hero Profile Page {heroId}</HeroName>
      <HeroInfo>
        <HeroInfoLeftColumn>
          {Object.entries(heroPoint).map(([abilityName, abilityPoint]) => (
            <AbilityBox abilityName={abilityName} abilityPoint={abilityPoint} />
          ))}
        </HeroInfoLeftColumn>

        <HeroInfoRightColumn>
          <Message>出現錯誤</Message>
          <Description>剩餘點數：30</Description>
          <ActionButton>儲存</ActionButton>
        </HeroInfoRightColumn>
      </HeroInfo>
    </HeroPageWrapper>
  );
};

export default HeroProfilePage;
