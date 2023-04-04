import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ModalProdivder } from './state/useModal';
import { DataProdivder } from './state/useData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProdivder>
      <DataProdivder>
        <App />
      </DataProdivder>
    </ModalProdivder>
  </React.StrictMode>
);


