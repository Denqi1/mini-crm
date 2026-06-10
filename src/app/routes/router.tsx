import { createBrowserRouter } from 'react-router';

import { ContactsPage } from '../../pages/Contacts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ContactsPage />,
  },
]);
