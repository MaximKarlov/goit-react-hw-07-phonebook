// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, getContacts } from '..//../redux/contactSlice';
import FormCss from '../Form/Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactOperation';
import { getContacts } from '../..//redux/contactSelector';

let newUser = [];

export const ContactForm = () => {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const addingContacts = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let phone = e.target.number.value;
    if (items.find(contact => contact.name === name)) {
      alert(`${name} is already existing`);
      e.target.name.value = '';
    } else {
      newUser = {
        name,
        phone,
      };
      // dispatch(addContacts(newUser));
      e.target.name.value = e.target.number.value = '';
    }
  };

  return (
    <form onSubmit={addingContacts} className={FormCss.form}>
      <div className={FormCss.input__contacts}>
        <label className={FormCss.input__item}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={FormCss.input__item}>
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={FormCss.input__btn}>
          Add contact
        </button>
      </div>
    </form>
  );
};
