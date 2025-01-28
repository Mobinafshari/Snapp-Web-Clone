import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './styles/otpForm.module.scss';
import { useNavigate } from 'react-router';

function OTP() {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const navigate = useNavigate();
  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [
      ...otp.map((d, idx) => (idx === index ? element.value : d)),
    ];
    setOtp(newOtp);

    if (element.value && element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }

    if (newOtp.every((digit) => digit !== '')) {
      handleSubmit(new Event('submit') as unknown as FormEvent);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit} className={styles['otp__form']}>
      <div className={styles['otp__inputs']}>
        {otp.map((data, index) => {
          return (
            <input
              className={styles['otp__input']}
              type="text"
              name="otp"
              maxLength={1}
              key={index}
              value={data}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target, index)
              }
              onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                e.target.select()
              }
            />
          );
        })}
      </div>
    </form>
  );
}

export default OTP;
