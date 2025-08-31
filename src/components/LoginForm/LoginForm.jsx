import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Невірний email').required('Обов\'язкове поле'),
  password: Yup.string().required('Обов\'язкове поле'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
          />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </div>
        
        <div className={styles.field}>
          <Field
            type="password"
            name="password"
            placeholder="Пароль"
            className={styles.input}
          />
          <ErrorMessage name="password" component="div" className={styles.error} />
        </div>
        
        <button type="submit" className={styles.button}>
          Увійти
        </button>
      </Form>
    </Formik>
  );
}