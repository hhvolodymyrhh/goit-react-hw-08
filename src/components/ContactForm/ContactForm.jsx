import css from './ContactForm.module.css';
import { Field, Form, Formik } from 'formik';
import { validationSchema } from './validationSchema';

import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialContact = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContact}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        return (
          <Form className={css.form}>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Your name"
            />
            {errors.name && touched.name ? (
              <div className={css.errors}>{errors.name}</div>
            ) : null}
            <Field
              className={css.field}
              type="number"
              name="number"
              placeholder="Your number"
            />
            {errors.number && touched.number ? (
              <div className={css.errors}>{errors.number}</div>
            ) : null}

            <button className={css.formButton} type="submit">
              Add contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;