import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Dashboard />
    </BrowserRouter>,
  document.getElementById('root')
)