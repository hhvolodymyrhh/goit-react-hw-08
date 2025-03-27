import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { deleteContact } from '../../redux/contacts/operations';


export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch(); //--------------------------------
  return (
    <>
      <div className={css.contactItem}>
        

        <p className={css.contactText}>
          <FaUser /> {name}
        </p>
        <p className={css.contactText}>
          <FaPhoneAlt /> {number}
        </p>
        
        <button
          className={css.contactButton}
          onClick={() => dispatch(deleteContact(id))}
        >
          delete
        </button>
      </div>
    </>
  );
}