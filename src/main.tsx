import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import { BrowserRouter } from 'react-router';
import ThemeProvider from '@context/ThemeProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/react-query';

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
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
