
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";


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
