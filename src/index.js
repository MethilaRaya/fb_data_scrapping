import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { PineconeClient } from "@pinecone-database/pinecone";

const pinecone = new PineconeClient();
(async () => {
  await pinecone.init({
    environment: "**",
    apiKey: "*****",
  });
  
  await pinecone.createIndex({
    createRequest: {
      name: "graph-api",
      dimension: 1536,
    },
  });

  
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
