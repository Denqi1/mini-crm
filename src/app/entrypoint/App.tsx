import { HeaderBar } from '../../widgets/HeaderBar';
import { NavigationBar } from '../../widgets/NavigationBar';
import type { AppProps } from './App.types';

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
