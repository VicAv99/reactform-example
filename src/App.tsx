import React from 'react';
import './App.css';
import { Header, Tacos } from './components';

const APP_NAME = 'Dave\'s Tacos';

function App() {
  return (
    <div className="App">
      <Header title={APP_NAME} />
      <Tacos />
    </div>
  );
}

export default App;
