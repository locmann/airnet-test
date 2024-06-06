import './App.css';
import Calendar from 'components/Calendar/Calendar.tsx';
import AppContextProvider from 'providers/AppContextProvider.tsx';

function App() {
  return (
    <AppContextProvider>
      <Calendar />
    </AppContextProvider>
  );
}

export default App;
