import '@config/i18n';
import Auth from '@features/authentication/Auth';
import OTPForm from '@features/authentication/OTPForm';
import PhoneForm from '@features/authentication/PhoneForm';
import Home from '@features/Home/Home';
import { Routes, Route, Navigate } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="authentication/enter-phone" />} />
      <Route path="/authentication" element={<Auth />}>
        <Route path="enter-phone" element={<PhoneForm />} index />
        <Route path="verify-OTP" element={<OTPForm />} />
      </Route>
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
