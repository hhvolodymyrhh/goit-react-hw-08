import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(5, 'Too short')
      .max(15, 'Too long')
      .required('Required'),
  });