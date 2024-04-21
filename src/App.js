import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Header from "./Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Footer} from "./Footer";
import CarRentalPage from "./pages/CarRentalPage";
import {AppProvider} from "./appProvider";
import AdminPage from "./pages/AdminPage";
import AdminTablePage from "./pages/AdminTablePage";

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
                    {/*<Route path="/admin" element={*/}
                    {/*    <>*/}
                    {/*        <AdminPage/>*/}
                    {/*        <Footer/>*/}
                    {/*    </>*/}
                    {/*}/>*/}
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
                            <AdminPage/>
                            <Footer/>
                        </>}/>

                    <Route path="/admin/table" element={
                        <>
                            <AdminTablePage/>
                            <Footer/>
                        </>}/>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
