import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Мінімум 3 символи').required('Обов’язкове поле'),
  email: Yup.string().email('Некоректний email').required('Обов’язкове поле'),
  password: Yup.string().min(7, 'Мінімум 7 символів').required('Обов’язкове поле'),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik 
      initialValues={{ name: "", email: "", password: "" }} 
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" autoComplete="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        
        <label className={css.label}>
          Email
          <Field type="email" name="email" autoComplete="email" />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>
        
        <label className={css.label}>
          Password
          <Field type="password" name="password" autoComplete="new-password" />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>
        
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;