import {PrimeReactProvider, PrimeReactContext} from 'primereact/api';
import {Button} from 'primereact/button';

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Header from "./Header";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Home} from "./Home";
import {Test} from "./Test";
import CarCard from "./CarCard";
import carPath from "./car1.PNG"
import {Footer} from "./Footer";


const car = {
    name: 'Toyota Aygo',
    image: carPath,
    fuelType: 'Benzină',
    transmission: 'M',
    price: '77.60',
    included: {
        cdwRca: 'Reduced Guarantee (MDMR)',
        vatDelivery: 'Vignette included',
        additionalDriver: 'Additional driver included for free',
    },
};

function App() {
    return (
        <Router>
            <div className="min-h-screen">
                <Header/>
                <Home/>
                {/*<Test/>*/}
                {/*<CarCard car={car} days={8}/>*/}
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
