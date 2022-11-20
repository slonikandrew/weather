import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { ThemeProvider } from './provider/ThemePropvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);
