import { useEffect, useState } from 'react';

import { useDebounce } from '../shared/lib/useDebounce';
import { getContacts } from '../entities/contacts';

import './App.css';

export const App = () => {
  const [contacts, setContacts] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const debouncedValue = useDebounce(searchValue);

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const makeRequest = async () => {
      const contactsResponse = await getContacts();

      setContacts(contactsResponse);
    };

    makeRequest();
  }, []);

  const filteredContacts = contacts?.filter((contact) => {
    const { name } = contact;

    const nameLowered = name.toLowerCase();
    const searchValueLowered = debouncedValue.toLowerCase();

    return nameLowered.includes(searchValueLowered);
  });

  return (
    <>
      <input
        placeholder="фильтрация по имени"
        value={searchValue}
        onChange={handleSearchValueChange}
      />

      {filteredContacts?.map((contact) => {
        return (
          <div key={contact.id} style={{ backgroundColor: 'gray' }}>
            <p>name: {contact.name}</p>
            <p>email: {contact.email}</p>
            <p>company: {contact.company}</p>
          </div>
        );
      })}
    </>
  );
};
