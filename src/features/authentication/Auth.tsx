import CustomButton from '@components/Button/CustomButton';
import styles from './styles/authentication.module.scss';
import CustomTextField from '@components/TextField/CustomTextField';

function Auth() {
  return (
    <section className={styles['auth']}>
      <div className={styles['auth-provider']}>
        <h1 className={styles['auth__heading']}>خوش آمدید!</h1>
        <p className={styles['auth__paragraph']}>
          لطفاً شماره‌‌ٔ موبایلتان را وارد کنید تا بتوانیم با شما در ارتباط
          باشیم.
        </p>
        <CustomTextField
          className={styles['auth__input']}
          label="شماره موبایل"
        />
      </div>
    </section>
  );
}

export default Auth;
