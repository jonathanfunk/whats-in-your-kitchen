import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="font-body lg:flex">
        <Header />
        <Main />
      </div>
    </GlobalProvider>
  );
}

export default App;
