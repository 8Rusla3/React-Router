import React from 'react';
import './App.css';
import { RouterComponent } from './lib/pages';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
     <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
}

export default App;
