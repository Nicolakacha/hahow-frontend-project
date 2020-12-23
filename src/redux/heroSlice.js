import { createSlice } from '@reduxjs/toolkit';
import {
  getHerosAPI,
  getHeroProfileAPI,
  updateHeroProfileAPI,
} from '../webAPI';

const heroSlice = createSlice({
  name: 'hero',
  initialState: {
    heros: [],
    sumPoints: 0,
    heroProfile: {
      str: 0,
      int: 0,
      agi: 0,
      luk: 0,
    },
    message: null,
    errorMessage: null,
  },
  reducers: {
    setHeros: (state, action) => {
      state.heros = action.payload;
    },
    setHero: (state, action) => {
      state.hero = action.payload;
    },
    setHeroProfile: (state, action) => {
      state.heroProfile = action.payload;
    },
    setSumPoints: (state, action) => {
      state.sumPoints = action.payload;
    },
    plusPoint: (state, action) => {
      state.heroProfile[action.payload] += 1;
    },
    minusPoint: (state, action) => {
      state.heroProfile[action.payload] -= 1;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setHeros,
  setHeroProfile,
  setSumPoints,
  plusPoint,
  minusPoint,
  setMessage,
  setErrorMessage,
} = heroSlice.actions;

export const getHeros = () => (dispatch) => {
  getHerosAPI().then((res) => {
    res[0].name === undefined
      ? dispatch(setErrorMessage('Fail to Load'))
      : dispatch(setHeros(res));
  });
};

export const getHeroProfile = (heroId) => (dispatch) => {
  getHeroProfileAPI(heroId).then((res) => {
    if (res.str === undefined) {
      dispatch(setErrorMessage('暫時無法取得資料，請重新整理'));
    } else {
      const abilities = res;
      const sumPoints = Object.values(res).reduce((acc, cur) => acc + cur);
      dispatch(setHeroProfile(abilities));
      dispatch(setSumPoints(sumPoints));
    }
  });
};

export const updateHeroProfile = (heroId, heroProfile) => (dispatch) => {
  updateHeroProfileAPI(heroId, heroProfile).then((res) => {
    if (!res || res !== 'OK') {
      return dispatch(setErrorMessage('發生錯誤，請再試一次'));
    }
    return dispatch(setMessage('儲存成功'));
  });
};

export const selectHeros = (store) => store.hero.heros;
export const selectHeroProfile = (store) => store.hero.heroProfile;
export const selectMessage = (store) => store.hero.message;
export const selectErrorMessage = (store) => store.hero.errorMessage;
export const selectSumPoints = (store) => store.hero.sumPoints;

export default heroSlice.reducer;
