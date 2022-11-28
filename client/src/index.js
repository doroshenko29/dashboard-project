import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GroupsStore from './store/GroupsStore';
import MetricStore from './store/MetricStore';

const store = {storeGroup: new GroupsStore(), storeMetrics: new MetricStore()}

export const Context = createContext(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

