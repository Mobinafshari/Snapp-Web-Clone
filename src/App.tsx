import '@config/i18n';
import Auth from '@features/authentication/Auth';
import Home from '@features/Home/Home';
import { Routes, Route, Navigate } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="authentication" />} />
      <Route index path="/authentication" element={<Auth />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
