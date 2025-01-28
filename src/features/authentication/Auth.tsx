import CustomButton from '@components/Button/CustomButton';
import styles from './styles/authentication.module.scss';
import CustomTextField from '@components/TextField/CustomTextField';
import { ArrowBackOutlined } from '@mui/icons-material';

function Auth() {
  return (
    <section className={styles['auth']}>
      <div className={styles['auth__language']}>
        <CustomButton>En</CustomButton>
      </div>
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
        <p className={styles['auth__paragraph']}>
          با ثبت نام در اسنپ، <span>قوانین و شرایط</span> و{' '}
          <span>بیانیه ی حریم خصوصی</span> را قبول میکنم.
        </p>
        <div className={styles['auth__button']}>
          <CustomButton variant="contained">
            <ArrowBackOutlined style={{ color: 'white' }} />
          </CustomButton>
        </div>
      </div>
    </section>
  );
}

export default Auth;
