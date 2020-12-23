const API_URL = 'https://hahow-recruit.herokuapp.com/heroes';

const getHerosAPI = () => {
  return fetch(`${API_URL}/`).then((res) => res.json());
};

const getHeroProfileAPI = (heroId) => {
  return fetch(`${API_URL}/${heroId}/profile`).then((res) => res.json());
};

const updateHeroProfileAPI = (heroId, heroProfile) => {
  return fetch(`${API_URL}/${heroId}/profile`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(heroProfile),
  })
    .then((res) => res.statusText)
};

export { getHerosAPI, getHeroProfileAPI, updateHeroProfileAPI };
