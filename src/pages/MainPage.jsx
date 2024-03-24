import React, {useRef, useState} from "react"
import {Calendar} from "primereact/calendar";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
import {Dropdown} from 'primereact/dropdown';
import {eurocarService} from "../services/eurocarService";
import {CarSection} from "../CarSection";
import Header from "../Header";

export const MainPage = () => {
    const [pickupDate, setPickupDate] = useState();
    const [dropOffDate, setDropOffDate] = useState(null);
    const [pickupHour, setPickupHour] = useState(null);
    const [dropoffHour, setDropoffHour] = useState(null);
    const [pickupCity, setPickupCity] = useState(null);
    const [dropoffCity, setDropoffCity] = useState(null);

    const cities = [
        {name: 'Târgu Mureș'},
        {name: 'Cluj-Napoca'},
        {name: 'Sighișoara'},
        {name: 'Brașov'},
    ];
    let calendarProps = {
        input: {
            root: {className: 'border-myblue'}
        },
        dropdownButton: {
            root: {className: 'bg-myblue border-myblue'}
        }
    }
    const commentSectionRef = useRef(null);

    const getPrice = () => {
        // if (validateInputs()) {
        //     let pickHour = pickupHour.getHours() + "." + pickupHour.getMinutes()
        //     let dropHour = dropoffHour.getHours() + "." + dropoffHour.getMinutes()
        //     eurocarService.getPrice(
        //         pickupDate.toLocaleDateString("ro-RO"),
        //         dropOffDate.toLocaleDateString("ro-RO"),
        //         pickHour,
        //         dropHour,
        //         pickupCity.name,
        //         dropoffCity.name,
        //     ).then((result) => {
        //         //updatePrices()
        //         scrollToComments();
        //     })
        // }
        scrollToComments();
    }

    const scrollToComments = () => {
        commentSectionRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const validateInputs = () => {
        return !(pickupDate == null || dropOffDate == null ||
            pickupHour == null || dropoffHour == null || pickupCity == null || dropoffCity);
    }

    return (
        <>
            <div className="h-screen">
                <Header/>
                <div className="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed bg-mybg pt-20">
                    <div
                        className="max-w-lg bg-[#121328] bg-opacity-60 rounded-lg overflow-hidden shadow-2xl p-6 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-40">
                        <div className="flex items-center justify-center">
                            <h1 className="font-bold text-2xl text-white">Închiriează o mașină</h1>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex flex-col">
                                <label htmlFor="pickupdate" className="mb-2 text-white">
                                    Dată preluare
                                </label>
                                <Calendar id="pickupdate" value={pickupDate} onChange={(e) => setPickupDate(e.value)}
                                          showIcon dateFormat="dd/mm/yy"
                                          pt={calendarProps}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="dropoffdate" className="block mb-2 text-white">
                                    Dată predare
                                </label>
                                <Calendar id="dropoffdate" value={dropOffDate} onChange={(e) => setDropOffDate(e.value)}
                                          showIcon
                                          pt={calendarProps}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                    Oră preluare
                                </label>
                                <Calendar value={pickupHour} onChange={(e) => setPickupHour(e.value)} showIcon timeOnly
                                          icon={() => <i className="pi pi-clock"/>}
                                          pt={calendarProps}/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                    Oră predare
                                </label>
                                <Calendar value={dropoffHour} onChange={(e) => setDropoffHour(e.value)} showIcon
                                          timeOnly
                                          icon={() => <i className="pi pi-clock"/>}
                                          pt={calendarProps}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                    Locație preluare
                                </label>
                                <Dropdown value={pickupCity} onChange={(e) => setPickupCity(e.value)}
                                          options={cities} optionLabel="name"
                                          className="w-full md:w-14rem"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                    Locație predare
                                </label>
                                <Dropdown value={dropoffCity} onChange={(e) => setDropoffCity(e.value)}
                                          options={cities} optionLabel="name"
                                          className="w-full md:w-14rem"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button label="Calculează prețul"
                                    className="w-full p-button-outlined hover:myblue text-white py-2 mt-10 rounded"
                                    onClick={getPrice}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={commentSectionRef} className="w-full h-2/5 bg-myblue pt-20">
                <CarSection/>
            </div>
        </>
    )
}
