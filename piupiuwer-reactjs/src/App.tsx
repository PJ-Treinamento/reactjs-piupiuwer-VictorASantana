import React from 'react';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './Assests/Styles/global'

function App() {
  return (
    <BrowserRouter>
      <Routes/>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
