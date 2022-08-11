import React from 'react';
import './App.css';
import Navigation from "./general/navigation/Navigation";
import Main from "./general/navigation/Main";

function App() {
  return (
      <div className={'container-xl mx-auto'}>
          <Navigation/>
          <Main/>
      </div>
  );
}

export default App;
