import { useNavigate, useSearchParams } from 'react-router';
import styles from './styles/otpForm.module.scss';
import CustomButton from '@components/Button/CustomButton';
import { ArrowForwardOutlined } from '@mui/icons-material';
import OTP from './OTP';
import { useEffect, useState } from 'react';

function OTPForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const phone = searchParams.get('phoneNumber');
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  return (
    <div>
      <div className={styles['otp__back']}>
        <CustomButton onClick={() => navigate(-1)}>
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
          <span onClick={() => navigate('/authentication/enter-phone')}>
            ویرایش
          </span>
        </p>
        <OTP />
        <div className="otp__wrong-number">
          {timer > 0 ? (
            <p>
              ارسال دوباره کد تایید تا{' '}
              {`00:${timer.toString().padStart(2, '0')}`}
            </p>
          ) : (
            <p className={styles['otp__resend']}>
              ارسال دوبارهٔ کد با تماس تلفنی
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OTPForm;
