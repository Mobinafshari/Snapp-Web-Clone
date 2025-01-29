import { useEffect, useState } from 'react';
type Props = {
  duration?: number;
};
function Timer({ duration = 59 }: Props) {
  const [timer, setTimer] = useState(duration);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);
  return (
    <>
      {timer > 0 ? (
        <p>
          ارسال دوباره کد تایید تا {`00:${timer.toString().padStart(2, '0')}`}
        </p>
      ) : (
        <p style={{ color: '#575eff' }}>ارسال دوبارهٔ کد با تماس تلفنی</p>
      )}
    </>
  );
}

export default Timer;
