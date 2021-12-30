import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import { GlobalStyle } from './theme/GlobalStyle';

createServer({
  /*   models: {
      transition: Model,
    },
  
    seeds(server) {
      server.db.loadData({
        transitions: [
          {
            id: 1,
            title: 'modelo',
            type: 'deposit',
            category: 'modelo',
            amount: 600,
            createdAt: new Date('2021-02-12 09:00:00'),
          },
        ],
      });
    }, */

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'modelo',
          amount: 600,
          type: 'deposit',
          category: 'modelo',
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
