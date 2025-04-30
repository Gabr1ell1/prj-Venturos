import { Router  } from './Router';
import './App.css';
import { AppContextProvider } from './Context';

const App = () => {
  return (
    <AppContextProvider>
        <Router/>
    </AppContextProvider>
  )
};
export { App };