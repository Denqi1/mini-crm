import type { ReactNode } from 'react';
import { NavigationBar } from '../../widgets/NavigationBar';
import { HeaderBar } from '../../widgets/HeaderBar';

export interface AppProps {
  children: ReactNode;
}

export const App = (props: AppProps) => {
  const { children } = props;

  return (
    <div className='flex'>
      <NavigationBar />

      <div>
        <HeaderBar />

        <div className='p-8'>{children}</div>
      </div>
    </div>
  );
};
