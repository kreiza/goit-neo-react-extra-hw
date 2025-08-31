import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <div className={css.info}>
        <p className={css.name}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}