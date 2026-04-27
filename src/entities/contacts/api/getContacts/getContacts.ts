export const getContacts = async () => {
  const response = await fetch('http://localhost:3001/contacts', {
    method: 'GET',
  });

  return await response.json();
};
