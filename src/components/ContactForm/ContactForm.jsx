import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          name: values.name,
          number: values.number,
        };
        dispatch(addContact(newContact));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        
        <div className={css.field}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>
        
        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
}