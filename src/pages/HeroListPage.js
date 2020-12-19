import styled from 'styled-components';
import { HeroCard } from '../components';

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

const HeroListPage = ({ heros }) => {
  console.log('HeroList');
  return (
    <HeroListWrapper>
      {heros && heros.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
    </HeroListWrapper>
  );
};

export default HeroListPage;
