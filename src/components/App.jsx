import AppCss from '../components/App.module.css';
import { useEffect } from 'react';
import { fetchTasks } from '../redux/contactOperation';
import { useDispatch } from 'react-redux';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  // Викликаємо операцію

  useEffect(() => {
    dispatch(fetchTasks());
    console.log('Tasks', fetchTasks());
  }, [dispatch]);

  return (
    <div className={AppCss.component}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
//   return (
//     <div>
//       {isLoading && <b>Loading tasks...</b>}
//       {error && <b>{error}</b>}
//       <p>{contact.length > 0 && <ContactList />
//     </div>
//   );
// };
