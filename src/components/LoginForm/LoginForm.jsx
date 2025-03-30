import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
   email: Yup.string().email('Некоректний email').required('Обов’язкове поле'),
  password: Yup.string().min(7, 'Мінімум 7 символів').required('Обов’язкове поле'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // e.preventDefault();
    // const form = e.currentTarget;

    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

    // form.reset();
    actions.resetForm();
  };

  return (
     <Formik 
          initialValues={{ email: "", password: "" }} 
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
    <Form className={css.form} autoComplete="off">
      <label className={css.label}>
        Email
          <Field type="email" name="email" autoComplete="email" />
          <ErrorMessage name="email" component="div" className={css.error} />
      </label>
      <label className={css.label}>
        Password
          <Field type="password" name="password" autoComplete="current-password" />
           <ErrorMessage name="password" component="div" className={css.error} />
      </label>
      <button type="submit">Log In</button>
      </Form>
      </Formik>
  );
};


export default LoginForm;