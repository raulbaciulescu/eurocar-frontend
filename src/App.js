import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Header from "./Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Footer} from "./Footer";
import CarRentalPage from "./pages/CarRentalPage";
import {CarWithPricePage} from "./pages/CarWithPricePage";
import {createContext, useState} from "react";

export const AppContext = createContext(null);

function App() {
    const [selectedCar, setSelectedCar] = useState(null);

    return (
        <AppContext.Provider value={{}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <MainPage/>
                            <Footer/>
                        </>
                    }/>
                    <Route path={`/rent/:selectedCar`} element={
                        <>
                            <Header/>
                            <CarRentalPage/>
                            <Footer/>
                        </>
                    }/>
                    <Route path="/about" element={
                        <div className="min-h-screen">
                            <Header/>
                            <CarWithPricePage/>
                            <Footer/>
                        </div>
                    }/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
