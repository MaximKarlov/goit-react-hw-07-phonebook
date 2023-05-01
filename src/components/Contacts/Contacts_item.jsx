import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactOperation';
import ContactCss from '../Contacts/Contacts.module.css';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li id={id} key={id} className={ContactCss.contact_item}>
      <p>*</p>
      {name}: <b>{number}</b>
      <button type="text" className={ContactCss.btn} onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </li>
  );
};
