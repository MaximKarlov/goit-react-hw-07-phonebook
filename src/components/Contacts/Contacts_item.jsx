import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactOperation';
import ContactCss from '../Contacts/Contacts.module.css';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li id={id} key={nanoid} className={ContactCss.contact_item}>
      <p>*</p>
      {name}: <b>{number}</b>
      <button type="text" className={ContactCss.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};
