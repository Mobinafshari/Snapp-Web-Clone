import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import { BrowserRouter } from 'react-router';
import ThemeProvider from '@context/ThemeProvider';

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/sw.js')
//     .then((registration) => {
//       console.log('Service Worker registered:', registration);
//     })
//     .catch((error) => {
//       console.error('Service Worker registration failed:', error);
//     });
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
