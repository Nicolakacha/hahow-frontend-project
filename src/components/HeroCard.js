import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeroCardWrapper = styled(NavLink)`
  padding: 10px;
  background-color: #101010;
  text-align: center;
  filter: brightness(0.65);
  transition: filter linear 0.2s;

  &.active,
  :hover {
    transition: all linear 0.2s;
    filter: brightness(1.5);
    & img {
      transition: all linear 0.2s;
      transform: translateX(-5px);
    }
    & h1 {
      color: #ffd700;
    }
  }
`;

const HeroName = styled.h1`
  padding: 15px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  font-size: 18px;
  font-weight: 400;
`;

const HeroPictureContainer = styled.div`
  overflow: hidden;
`;

const HeroPicture = styled.img`
  width: 105%;
`;

const HeroCardContent = styled.div``;

const HeroCard = ({ hero }) => {
  return (
    <HeroCardWrapper to={`/hahow-frontend-project/heroes/${hero.id}`}>
      <HeroCardContent>
        <HeroPictureContainer>
          <HeroPicture src={hero.image} />
        </HeroPictureContainer>
        <HeroName>{hero.name}</HeroName>
      </HeroCardContent>
    </HeroCardWrapper>
  );
};

export default HeroCard;
