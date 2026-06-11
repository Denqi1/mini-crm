import { useEffect } from 'react';

export const ContactsPage = () => {
  useEffect(() => {
    new Promise((res) => {
      fetch('/api/contacts').then((value) => {
        res(value.json());
      });
    }).then((data) => {
      console.log(data);
    });
  });

  return (
    <div>
      <h1 className='text-4xl font-semibold'>Контакты</h1>

      {/* Тут будут данные */}
    </div>
  );
};
