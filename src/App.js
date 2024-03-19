import {PrimeReactProvider, PrimeReactContext} from 'primereact/api';
import {Button} from 'primereact/button';

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Header from "./Header";
import {Route, BrowserRouter as Router, Routes, BrowserRouter} from "react-router-dom";
import {Home} from "./Home";
import {Test} from "./Test";
import CarCard from "./CarCard";
import carPath from "./car1.PNG"
import {Footer} from "./Footer";
import CarRentalPage from "./CarRentalPage";
import MyComponent from "./MyComponent";
import ImageComponent from "./ImageComponent";
import {CarPage} from "./CarPage";


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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="min-h-screen">
                        <Header/>
                        <Home/>
                        <CarPage/>
                        <Footer/>
                    </div>
                }/>
                <Route path="/ok" element={
                    <div className="min-h-screen">
                        <Header/>
                        <CarRentalPage/>
                        <Footer/>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
