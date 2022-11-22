import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BudgetProvider from './contexts/BudgetContext';
import CategoryProvider from './contexts/CategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BudgetProvider>
  <CategoryProvider>
    <App />
  </CategoryProvider>
  </BudgetProvider>
);

