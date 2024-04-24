import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Header from "./Header";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Footer} from "./Footer";
import CarRentalPage from "./pages/CarRentalPage";
import {AppProvider} from "./appProvider";
import AdminCalendarPage from "./pages/AdminCalendarPage";
import AdminTablePage from "./pages/AdminTablePage";

function App() {
    return (
        <AppProvider>
            <HashRouter>
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
                    <Route
                        path="/admin"
                        element={
                            <Routes>
                                <Route path="/" element={<Navigate to="/admin/calendar"/>}/>
                            </Routes>
                        }
                    />
                    <Route path="/admin/calendar" element={
                        <>
                            <AdminCalendarPage/>
                            <Footer/>
                        </>}/>

                    <Route path="/admin/table" element={
                        <>
                            <AdminTablePage/>
                            <Footer/>
                        </>
                    }
                    />
                </Routes>
            </HashRouter>
        </AppProvider>
    );
}

export default App;
