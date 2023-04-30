// import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '..//../redux/contactSlice';
import { nanoid } from 'nanoid';
import ContactCss from '../Contacts/Contacts.module.css';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li id={id} key={nanoid} className={ContactCss.contact_item}>
      <p>*</p>
      {name}: {number}
      <button type="text" onClick={() => dispatch(deleteContact(id))} className={ContactCss.btn}>
        Delete
      </button>
    </li>
  );
};
