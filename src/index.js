import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

