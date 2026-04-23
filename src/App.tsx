import { useEffect, useState } from 'react';
import './App.css';

const getContacts = async () => {
  const response = await fetch('http://localhost:3001/contacts', {
    method: 'GET',
  });

  return await response.json();
};

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay, value]);

  return debouncedValue;
};

function App() {
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
}

export default App;
