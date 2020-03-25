import React from 'react';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App font-body">
        <Header />
      </div>
    </GlobalProvider>
  );
}

export default App;
