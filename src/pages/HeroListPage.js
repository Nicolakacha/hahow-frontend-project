import styled from 'styled-components';
import { useEffect } from 'react';
import { HeroCard } from '../components';
import useHero from '../hooks/useHero';

const HeroListWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  justify-items: center;
  margin: 0 auto;
  padding: 10px;
  max-width: 800px;
  background-color: #34094b;
  box-shadow: 5px 5px 15px 5px #000000;
`;

const ErrorMessage = styled.div`
  font-size: 24px;
  color: red;
`;

const HeroListPage = () => {
  const { heros, errorMessage, handleGetHeros } = useHero();
  useEffect(() => handleGetHeros(), []);
  return (
    <HeroListWrapper>
      {errorMessage === 'Fail to Load' ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        heros.map((hero) => <HeroCard key={hero.id} hero={hero} />)
      )}
    </HeroListWrapper>
  );
};

export default HeroListPage;
