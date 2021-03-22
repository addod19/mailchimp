import React from 'react';

import Nav from './components/navbar/nav';
import HomePage from './pages/HomePage';

import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <Main>
      <Nav />
      <HomePage /> 
    </Main>
  );
}

export default App;
