import { useSelector } from 'react-redux';
import { ContactsItem } from '../Contacts/Contacts_item';
import ContactCss from './Contacts.module.css';
import { getContacts, getFilter } from '../..//redux/contactSelector';

export const ContactList = () => {
  // Отримуємо частини стану
  const { contact } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log('contact', contact);
  // const options = contact.filter(contacts => contacts.name.includes(filter));
  console.log('filter', filter);
  // <div>
  //   {isLoading && <b>Loading tasks...</b>}
  //   {error && <b>{error}</b>}
  //   {contact.length > 0 && <ContactList />}
  // </div>;
  return contact.length !== 0 ? (
    <ul className={ContactCss.contact}>
      {contact.map(({ id, name, phone }) => (
        <ContactsItem name={name} id={id} key={id} number={phone} />
      ))}
    </ul>
  ) : (
    'Contact is empty. Please add contact!!!'
  );
};
