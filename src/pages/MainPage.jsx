import React, {useContext, useEffect, useRef, useState} from "react"
import {Calendar} from "primereact/calendar";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
import {Dropdown} from 'primereact/dropdown';
import {eurocarService} from "../services/eurocarService";
import {CarSection} from "../CarSection";
import Header from "../Header";
import {calendarProps, cities} from "../constants";
import {AppContext} from "../appProvider";
import {Toast} from "primereact/toast";
import {CarSection2} from "../CarSection2";

export const MainPage = () => {
    const toast = useRef(null);
    const commentSectionRef = useRef(null);
    const [computedPrice, setComputedPrice] = useState(0);
    const {pickupDate, updatePickupDate} = useContext(AppContext);
    const {dropOffDate, updateDropOffDate} = useContext(AppContext);
    const {pickupHour, updatePickupHour} = useContext(AppContext);
    const {dropoffHour, updateDropOffHour} = useContext(AppContext);
    const {pickupCity, updatePickupCity} = useContext(AppContext);
    const {dropoffCity, updateDropoffCity} = useContext(AppContext);
    const [disabledDatesState, setDisabledDatesState] = useState([]);
    const t = new Date();

    const dateTemplate = (date) => {
        let tempDate = new Date(date.year, date.month, date.day);
        let today = new Date();
        if (tempDate < today) {
            return (
                <strong style={{textDecoration: 'line-through'}}>{date.day}</strong>
            );
        }

        return date.day;
    }

    // useEffect(() => {
    //     eurocarService.getAvailability(
    //
    //     );
    //     console.log(disabledDatesState)
    //     setDisabledDatesState(
    //         [x]
    //     );
    // }, []);


    const getPrice = () => {
        if (validateInputs()) {
            let pickHour = pickupHour.getHours() + "." + pickupHour.getMinutes()
            let dropHour = dropoffHour.getHours() + "." + dropoffHour.getMinutes()
            eurocarService.getPrice(
                pickupDate.toLocaleDateString("ro-RO"),
                dropOffDate.toLocaleDateString("ro-RO"),
                pickHour,
                dropHour,
            ).then((result) => {
                console.log("result: " + result)
                setComputedPrice(result.price)
                scrollToCarSection();
            })
        }
    }

    const scrollToCarSection = () => {
        commentSectionRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const validateInputs = () => {
        let secondCondition = false;
        let firstCondition = !(pickupDate == null || dropOffDate == null ||
            pickupHour == null || dropoffHour == null || pickupCity == null || dropoffCity === null);
        if (!firstCondition)
            toast.current.show({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Trebuie completate toate câmpurile pentru rezervare!',
                life: 3000
            });
        else {
            secondCondition = pickupDate < dropOffDate;
            if (!secondCondition)
                toast.current.show({
                    severity: 'warn',
                    summary: 'Warning',
                    detail: 'Data de preluare trebuie sa fie inainte de data de predare!',
                    life: 3000
                });
        }

        return firstCondition && secondCondition;
    }

    return (
        <>
            <Toast ref={toast}/>
            <div className="h-screen">
                <Header/>
                <div className="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed bg-mybg pt-10">
                    <div
                        className="max-w-lg bg-[#121328] bg-opacity-60 rounded-lg overflow-hidden shadow-2xl p-6 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-40">
                        <div className="flex items-center justify-center">
                            <h1 className="font-bold text-2xl text-white">Închiriază o mașină</h1>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex flex-col">
                                <label htmlFor="pickupdate" className="mb-2 text-white">
                                    Dată preluare
                                </label>
                                <Calendar id="pickupdate" value={pickupDate} onChange={(e) => updatePickupDate(e.value)}
                                          showIcon dateFormat="dd/mm/yy"
                                          pt={calendarProps}
                                          disabledDates={disabledDatesState}
                                         // dateTemplate={dateTemplate}
                                          minDate={t}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="dropoffdate" className="block mb-2 text-white">
                                    Dată predare
                                </label>
                                <Calendar id="dropoffdate" value={dropOffDate}
                                          onChange={(e) => updateDropOffDate(e.value)}
                                          showIcon dateFormat="dd/mm/yy"
                                          pt={calendarProps}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                    Oră preluare
                                </label>
                                <Calendar value={pickupHour} onChange={(e) => updatePickupHour(e.value)} showIcon
                                          timeOnly
                                          icon={() => <i className="pi pi-clock"/>}
                                          pt={calendarProps}/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                    Oră predare
                                </label>
                                <Calendar value={dropoffHour} onChange={(e) => updateDropOffHour(e.value)} showIcon
                                          timeOnly
                                          icon={() => <i className="pi pi-clock"/>}
                                          pt={calendarProps}/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                    Locație preluare
                                </label>
                                <Dropdown value={pickupCity} onChange={(e) => updatePickupCity(e.value)}
                                          options={cities} optionLabel="name"
                                          className="w-full md:w-14rem"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                    Locație predare
                                </label>
                                <Dropdown value={dropoffCity} onChange={(e) => updateDropoffCity(e.value)}
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
                <CarSection computedPrice={computedPrice}/>
            </div>
        </>
    )
}
