import React, {useContext, useRef, useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Calendar} from "primereact/calendar";
import {calendarPropsWhiteBg, cities} from "./constants";
import {AppContext} from "./appProvider";
import {Dropdown} from "primereact/dropdown";
import {eurocarService} from "./services/eurocarService";
import {Toast} from 'primereact/toast';
import {useParams} from "react-router-dom";


const CarRentalForm = () => {
    const {selectedCar} = useParams();
    const toast = useRef(null);
    const {pickupDate, updatePickupDate} = useContext(AppContext);
    const {dropOffDate, updateDropOffDate} = useContext(AppContext);
    const {pickupHour, updatePickupHour} = useContext(AppContext);
    const {dropoffHour, updateDropOffHour} = useContext(AppContext);
    const {pickupCity, updatePickupCity} = useContext(AppContext);
    const {dropoffCity, updateDropoffCity} = useContext(AppContext);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onRentButtonClick = () => {
        if (validateInputs()) {
            let pickHourTemp = pickupHour.getHours() + "." + pickupHour.getMinutes()
            let dropHourTemp = dropoffHour.getHours() + "." + dropoffHour.getMinutes()

            let rentObj = {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "phoneNumber": phoneNumber,
                "pickupDate": pickupDate.toLocaleDateString("ro-RO"),
                "dropoffDate": dropOffDate.toLocaleDateString("ro-RO"),
                "pickupHour": pickHourTemp,
                "dropoffHour": dropHourTemp,
                "pickupCity": pickupCity.name,
                "dropoffCity": dropoffCity.name,
                "carId": selectedCar === "car1" ? 1 : 2
            }

            eurocarService
                .rent(rentObj)
                .then(r => {
                    console.log(r)
                    toast.current.show({
                        severity: 'info',
                        summary: 'Info',
                        detail: 'Rezervarea a fost realizată!'
                    });
                })
                .catch(e => {
                    console.log(e)
                    toast.current.show({
                        severity: 'error',
                        summary: 'Info',
                        detail: 'Exista deja o rezervare pentru aceasta data'
                    });
                })
        } else
            toast.current.show({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Trebuie completate toate câmpurile pentru rezervare!',
                life: 3000
            });
    }

    const validateInputs = () => {
        return !(pickupDate == null || dropOffDate == null ||
            pickupHour == null || dropoffHour == null || pickupCity == null || dropoffCity === null || firstname === "" || lastname === "" ||
            email === "" || phoneNumber === ""
        );
    }

    const clearFields = () => {
        setFirstname("")
        setLastname("")
        setEmail("")
        setPhoneNumber("")

        updatePickupDate(null)
        updateDropOffDate(null)
        updateDropOffHour(null)
        updatePickupHour(null)

        updatePickupCity(null)
        updateDropoffCity(null)
    }

    return (
        <>
            <Toast ref={toast}/>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-60">
                    <label htmlFor="username" className="block my-2">Nume</label>
                    <InputText id="username" aria-describedby="username-help"
                               value={firstname} onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-60">
                    <label htmlFor="username" className="block my-2">Prenume</label>
                    <InputText id="username" aria-describedby="username-help"
                               value={lastname} onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="username" className="block my-2">Email</label>
                    <InputText id="username" aria-describedby="username-help"
                               value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="username" className="block my-2">Număr telefon</label>
                    <InputText id="username" aria-describedby="username-help" keyfilter="int"
                               value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-60">
                    <label htmlFor="pickupdate" className="my-2">
                        Dată preluare
                    </label>
                    <Calendar id="pickupdate" value={pickupDate} onChange={(e) => updatePickupDate(e.value)}
                              showIcon dateFormat="dd/mm/yy"
                              pt={calendarPropsWhiteBg}
                    />
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="pickupdate" className="my-2">
                        Dată preluare
                    </label>
                    <Calendar id="pickupdate" value={dropOffDate} onChange={(e) => updateDropOffDate(e.value)}
                              showIcon dateFormat="dd/mm/yy"
                              pt={calendarPropsWhiteBg}
                    />
                </div>

                <div className="flex flex-col w-60">
                    <label htmlFor="buttondisplay" className="block my-2">
                        Oră preluare
                    </label>
                    <Calendar value={pickupHour} onChange={(e) => updatePickupHour(e.value)} showIcon timeOnly
                              icon={() => <i className="pi pi-clock"/>}
                              pt={calendarPropsWhiteBg}/>
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="buttondisplay" className="block my-2">
                        Oră preluare
                    </label>
                    <Calendar value={dropoffHour} onChange={(e) => updateDropOffHour(e.value)} showIcon timeOnly
                              icon={() => <i className="pi pi-clock"/>}
                              pt={calendarPropsWhiteBg}/>
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="buttondisplay" className="my-2">
                        Locație preluare
                    </label>
                    <Dropdown value={pickupCity} onChange={(e) => updatePickupCity(e.value)}
                              options={cities} optionLabel="name"
                              className="w-full md:w-14rem"/>
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="buttondisplay" className="my-2">
                        Locație predare
                    </label>
                    <Dropdown value={dropoffCity} onChange={(e) => updateDropoffCity(e.value)}
                              options={cities} optionLabel="name"
                              className="w-full md:w-14rem"/>
                </div>

                <div className="flex flex-col">
                    <Button label="Rezervă"
                            onClick={onRentButtonClick}
                            className="bg-myblue text-white py-2 mt-10 rounded"/>
                </div>
            </div>
        </>
    );
}

export default CarRentalForm;