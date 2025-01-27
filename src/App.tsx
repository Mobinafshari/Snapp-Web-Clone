import '@config/i18n';
import Auth from '@features/authentication/Auth';
import Home from '@features/Home/Home';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/authentication" element={<Auth />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
