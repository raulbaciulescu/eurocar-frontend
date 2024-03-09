import logo from './logo.svg';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import './App.css';
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-cyan/theme.css";


function App() {
  return (
      <PrimeReactProvider>
        <div className="App">
          <Button>
            Hello
          </Button>
        </div>
      </PrimeReactProvider>
  );
}

export default App;
