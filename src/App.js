import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './constants/globalStyle';
import { HeroListPage, HeroProfilePage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { heros, heroPoint } from './fakeData';

const Root = styled.div`
  padding: 20px 100px;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(#64337f, #000);
`;

function App() {
  return (
    <Root>
      <GlobalStyle />
      <BrowserRouter>
        <HeroListPage heros={heros} />
        <Routes basename="/heroes">
          <Route
            path={'/:heroId'}
            element={<HeroProfilePage heroPoint={heroPoint} />}
          />
        </Routes>
      </BrowserRouter>
    </Root>
  );
}

export default App;
