import CustomButton from '@components/Button/CustomButton';
import styles from './styles/authentication.module.scss';
import CustomTextField from '@components/TextField/CustomTextField';
import { ArrowBackOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import AuthSchema, { AuthPayloadType } from './validations/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';

function PhoneForm() {
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<AuthPayloadType>({
    resolver: zodResolver(AuthSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (values: AuthPayloadType) => {
    navigate(`/authentication/verify-OTP?phoneNumber=${values.phoneNumber}`);
  };
  return (
    <>
      <div className={styles['auth__language']}>
        <CustomButton>En</CustomButton>
      </div>
      <form
        className={styles['auth-provider']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles['auth__heading']}>خوش آمدید!</h1>
        <p className={styles['auth__paragraph']}>
          لطفاً شماره‌‌ٔ موبایلتان را وارد کنید تا بتوانیم با شما در ارتباط
          باشیم.
        </p>
        <CustomTextField
          {...register('phoneNumber')}
          className={styles['auth__input']}
          label="شماره موبایل"
        />
        <p className={styles['auth__paragraph']}>
          با ثبت نام در اسنپ، <span>قوانین و شرایط</span> و{' '}
          <span>بیانیه ی حریم خصوصی</span> را قبول میکنم.
        </p>
        <div className={styles['auth__button']}>
          <CustomButton variant="contained" isDisabled={!isValid}>
            <ArrowBackOutlined style={{ color: 'white' }} />
          </CustomButton>
        </div>
      </form>
    </>
  );
}

export default PhoneForm;
