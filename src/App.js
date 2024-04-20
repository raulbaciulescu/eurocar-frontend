import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Header from "./Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Footer} from "./Footer";
import CarRentalPage from "./pages/CarRentalPage";
import {AppProvider} from "./appProvider";
import AdminPage from "./pages/AdminPage";

function App() {
    return (
        <AppProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
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
                            <Footer/>
                        </div>
                    }/>
                    <Route path="/admin" element={
                        <>
                            <AdminPage/>
                            <Footer/>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
