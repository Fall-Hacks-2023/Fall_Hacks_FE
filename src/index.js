import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  withCredentials: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
    <RecoilRoot>   
      <App />
    </RecoilRoot>
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

