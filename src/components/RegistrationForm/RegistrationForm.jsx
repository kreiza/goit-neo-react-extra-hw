import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Обов\'язкове поле'),
  email: Yup.string().email('Невірний email').required('Обов\'язкове поле'),
  password: Yup.string().min(7, 'Мінімум 7 символів').required('Обов\'язкове поле'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <Field
            type="text"
            name="name"
            placeholder="Ім'я"
            className={styles.input}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        
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
          Зареєструватися
        </button>
      </Form>
    </Formik>
  );
}