import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ProviderTheme } from './context/Theme';
import { ProviderLoading } from './context/Loading';
import { ProviderMessageModal } from './context/MessageModal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProviderTheme>
      <ProviderLoading>
        <ProviderMessageModal>
          <App />
        </ProviderMessageModal>
      </ProviderLoading>
    </ProviderTheme>
  </React.StrictMode>
);