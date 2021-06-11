import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider, createStore } from "easy-peasy";
import reducer from './api/reducer';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from '@apollo/react-hooks'
import client from './api/index'

const store = createStore(reducer);

const CardApp = () =>{
    return (
        <StoreProvider store={store}>
            <App/>
        </StoreProvider>
    );
};


ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <CardApp />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
