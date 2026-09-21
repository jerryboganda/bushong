import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker with auto-update for offline functionality
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    updateSW(true);
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  },
  onOfflineReady() {
    console.log('Radiologic Science Reference PWA: ready to work offline');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
