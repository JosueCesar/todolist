import React from 'react';
import AppProvider from './hooks';

import Routes from './routes';
import GlobalStyle from './styles/Global';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;