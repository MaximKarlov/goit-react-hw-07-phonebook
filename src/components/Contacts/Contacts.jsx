import { useSelector } from 'react-redux';
import { ContactsItem } from '../Contacts/Contacts_item';
import ContactCss from './Contacts.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const options = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return options.length !== 0 ? (
    <ul className={ContactCss.contact}>
      {options.map(({ id, name, number }) => (
        <ContactsItem name={name} id={id} key={id} number={number} />
      ))}
    </ul>
  ) : (
    'Contact is empty. Please add contact!!!'
  );
};
