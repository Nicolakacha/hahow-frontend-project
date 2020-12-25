import { useSelector, useDispatch } from 'react-redux';
import {
  selectHeros,
  selectHeroProfile,
  selectMessage,
  selectErrorMessage,
  selectSumPoints,
  getHeros,
  getHeroProfile,
  updateHeroProfile,
  setMessage,
  setErrorMessage,
  plusPoint,
  minusPoint,
} from '../redux/heroSlice';

export default function useHero() {
  const dispatch = useDispatch();
  const heros = useSelector(selectHeros);
  const heroProfile = useSelector(selectHeroProfile);
  const message = useSelector(selectMessage);
  const errorMessage = useSelector(selectErrorMessage);
  const sumPoints = useSelector(selectSumPoints);
  
  // the points that heros has currently.
  const currentPoints = Object.values(heroProfile).reduce(
    (acc, cur) => acc + cur
  );
  
  // count last points 
  const lastPoints = sumPoints - currentPoints;
  
  const handleGetHeros = () => {
    dispatch(getHeros());
  };

  const handleGetHeroProfile = (heroId) => {
    dispatch(getHeroProfile(heroId));
  };

  const handlePlusPoint = (pointName) => {
    if (lastPoints !== 0) {
      dispatch(plusPoint(pointName));
      resetMessage();
    }
  };

  const handleMinusPoint = (pointName) => {
    if (heroProfile[pointName] > 0) {
      dispatch(minusPoint(pointName));
      resetMessage();
    }
  };

  const handleSaveProfile = (heroId, heroProfile) => {
    lastPoints === 0
      ? dispatch(updateHeroProfile(heroId, heroProfile))
      : dispatch(setErrorMessage('還有點數哦'));
  };

  const resetMessage = () => {
    dispatch(setMessage(null));
    dispatch(setErrorMessage(null));
  };

  return {
    handleGetHeros,
    handleGetHeroProfile,
    handleSaveProfile,
    handlePlusPoint,
    handleMinusPoint,
    resetMessage,
    heros,
    heroProfile,
    errorMessage,
    message,
    lastPoints,
  };
}
