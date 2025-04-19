import '@config/i18n';
import { retryDynamicImport } from '@utils/retryDynamicImport';
import { Routes, Route, Navigate } from 'react-router';
const Auth = retryDynamicImport(() => import('@features/authentication/Auth'));
const OTPForm = retryDynamicImport(
  () => import('@features/authentication/OTPForm')
);
const PhoneForm = retryDynamicImport(
  () => import('@features/authentication/PhoneForm')
);
const Home = retryDynamicImport(() => import('@features/Home/Home'));

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
