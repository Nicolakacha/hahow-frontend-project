import { useEffect } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../constants/breakpoint';
import { useParams } from 'react-router-dom';
import { AbilityBox, ActionButton } from '../components';
import useHero from '../hooks/useHero';

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
  margin-bottom: 5px;
  color: white;
  font-weight: 800;
`;

const ErrorMessage = styled(Message)`
  margin-bottom: 5px;
  color: red;
  font-weight: 800;
`;

const HeroProfilePage = () => {
  const { heroId } = useParams();
  const {
    heroProfile,
    errorMessage,
    message,
    lastPoints,
    handleGetHeroProfile,
    handlePlusPoint,
    handleMinusPoint,
    handleSaveProfile,
    resetMessage,
  } = useHero();
  useEffect(() => {
    handleGetHeroProfile(heroId);
    resetMessage();
  }, [heroId]);

  return (
    <HeroPageWrapper>
      <HeroName>Hero Profile Page</HeroName>
      <HeroInfo>
        <HeroInfoLeftColumn>
          {Object.entries(heroProfile).map(([abilityName, abilityPoint]) => (
            <AbilityBox
              key={abilityName}
              abilityName={abilityName}
              abilityPoint={abilityPoint}
              handlePlusPoint={handlePlusPoint}
              handleMinusPoint={handleMinusPoint}
            />
          ))}
        </HeroInfoLeftColumn>

        <HeroInfoRightColumn>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {message && <Message>{message}</Message>}
          <Description>剩餘點數：{lastPoints}</Description>
          <ActionButton onClick={() => handleSaveProfile(heroId, heroProfile)}>
            儲存
          </ActionButton>
        </HeroInfoRightColumn>
      </HeroInfo>
    </HeroPageWrapper>
  );
};

export default HeroProfilePage;
