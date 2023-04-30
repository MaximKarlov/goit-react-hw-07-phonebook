import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '..//../redux/contactSlice';
import { nanoid } from 'nanoid';
import ContactCss from '../Contacts/Contacts.module.css';

export const ContactsItem = ({ id, name, number }) => {
  return (
    <li id={id} key={nanoid} className={ContactCss.contact_item}>
      <p>*</p>
      {name}: <b>{number}</b>
      <button type="text" className={ContactCss.btn}>
        Delete
      </button>
    </li>
  );
};

// onClick={() => dispatch(deleteContact(id))}
