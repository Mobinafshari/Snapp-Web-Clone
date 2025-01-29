import { useNavigate, useSearchParams } from 'react-router';
import styles from './styles/otpForm.module.scss';
import CustomButton from '@components/Button/CustomButton';
import { ArrowForwardOutlined } from '@mui/icons-material';
import OTP from './OTP';
import Timer from '@components/Timer/Timer';

function OTPForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const phone = searchParams.get('phoneNumber');
  const handleOtpSubmit = () => navigate('/home');
  const backward = '/authentication/enter-phone';
  return (
    <div>
      <div className={styles['otp__back']}>
        <CustomButton onClick={() => navigate(backward)}>
          <ArrowForwardOutlined />
        </CustomButton>
      </div>
      <div className={styles['otp']}>
        <h1 className={styles['otp__heading']}>کد تأیید را وارد کنید</h1>
        <p className={styles['otp__paragraph']}>
          کد تایید را به شماره <span>{phone}</span> فرستادیم.
        </p>
        <p className={styles['otp__wrong-number']}>
          شمارهٔ موبایل اشتباه است؟{' '}
          <span onClick={() => navigate(backward)}>ویرایش</span>
        </p>
        <OTP handleOtpSubmit={handleOtpSubmit} />
        <div className={styles['otp__resend']}>
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default OTPForm;
