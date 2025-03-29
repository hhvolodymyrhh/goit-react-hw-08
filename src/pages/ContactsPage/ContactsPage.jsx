import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsPage.module.css';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContact } from '../../redux/contacts/operations';

const ContactsPage  = () => {

  const { isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className="container phonebook-inner">
      <h1>Phonebook with Redux</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
}

export default ContactsPage;