import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import CarRentalPage from "./pages/CarRentalPage";
import AdminCalendarPage from "./pages/AdminCalendarPage";
import AdminTablePage from "./pages/AdminTablePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {Helmet} from "react-helmet";
import SpecialCarsPage from "./pages/SpecialCarsPage";
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import {AppProvider} from "./providers/appProvider";

function App() {
    return (
        <>
            <Helmet>
                <meta name="description"
                      content="Inchiriere microbuz/minibus/duba/masina 8+1 locuri Targu Mures, Sighisoara, Cluj-Napoca, Bistrita, Brasov, Sibiu"/>
            </Helmet>
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
                            </>
                        }/>

                        <Route path="/admin/table" element={
                            <>
                                <AdminTablePage/>
                                <Footer/>
                            </>
                        }
                        />
                        <Route path="/admin/login" element={
                            <>
                                <Header/>
                                <LoginPage/>
                                <Footer/>
                            </>
                        }
                        />
                        <Route path="/admin/register" element={
                            <>
                                <Header/>
                                <RegisterPage/>
                                <Footer/>
                            </>
                        }
                        />
                        <Route path="/special-cars" element={
                            <>
                                <SpecialCarsPage/>
                                <Footer/>
                            </>
                        }
                        />
                    </Routes>
                </HashRouter>
            </AppProvider>
        </>
    );
}

export default App;
