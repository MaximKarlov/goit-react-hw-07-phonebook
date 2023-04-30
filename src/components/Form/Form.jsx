// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, getContacts } from '..//../redux/contactSlice';
// import { nanoid } from 'nanoid';
import FormCss from '../Form/Form.module.css';

// let newUser = [];

export const ContactForm = () => {
  // const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

  // const addContacts = e => {
  //   e.preventDefault();
  //   let name = e.target.name.value;
  //   let number = e.target.number.value;
  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already existing`);
  //     e.target.name.value = '';
  //   } else {
  //     newUser = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };
  //     dispatch(addContact(newUser));
  //     e.target.name.value = e.target.number.value = '';
  //   }
  // };

  // onSubmit = { addContacts };

  return (
    <form className={FormCss.form}>
      <div className={FormCss.input__contacts}>
        <label className={FormCss.input__item}>
          Name
          <input
            type="text"
            // name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={FormCss.input__item}>
          Number
          <input
            type="tel"
            // name="number"
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
