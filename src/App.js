import {PrimeReactProvider, PrimeReactContext} from 'primereact/api';
import {Button} from 'primereact/button';

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Header from "./Header";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Home} from "./Home";

function App() {
    return (
        // <PrimeReactProvider value={{ unstyled: true, pt: Bootstrap_PT }}>
            <Router>
                <div className="App">
                    <Header/>
                    <Home/>
                </div>
            </Router>
        // </PrimeReactProvider>
    );
}

export default App;
