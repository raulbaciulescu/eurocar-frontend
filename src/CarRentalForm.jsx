import React, {useState} from 'react';
import logo from "./logo1.svg"
import ImageComponent from "./ImageComponent";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Calendar} from "primereact/calendar";

const CarRentalForm = () => {
    const [pickupDate, setPickupDate] = useState(null);
    const [dropOffDate, setDropOffDate] = useState(null);
    const [pickupHour, setPickupHour] = useState(null);
    const [dropoffHour, setDropoffHour] = useState(null);

    const [pickupCity, setPickupCity] = useState(null);
    const [dropoffCity, setDropoffCity] = useState(null);


    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-60">
                    <label htmlFor="username" className="block my-2">Nume</label>
                    <InputText id="username" aria-describedby="username-help"/>
                </div>

                <div className="flex flex-col w-60">
                    <label htmlFor="username" className="block my-2">Prenume</label>
                    <InputText id="username" aria-describedby="username-help"/>
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="username" className="block my-2">Email</label>
                    <InputText id="username" aria-describedby="username-help"/>
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="username" className="block my-2">Număr telefon</label>
                    <InputText id="username" aria-describedby="username-help"/>
                </div>

                <div className="flex flex-col w-60">
                    <label htmlFor="pickupdate" className="my-2">
                        Dată preluare
                    </label>
                    <Calendar id="pickupdate" value={pickupDate} onChange={(e) => setPickupDate(e.value)}
                              showIcon
                              pt={{
                                  dropdownButton: {
                                      root: {className: 'bg-myblue border-myblue'}
                                  }
                              }}
                    />
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="pickupdate" className="my-2">
                        Dată preluare
                    </label>
                    <Calendar id="pickupdate" value={pickupDate} onChange={(e) => setPickupDate(e.value)}
                              showIcon
                              pt={{
                                  dropdownButton: {
                                      root: {className: 'bg-myblue border-myblue'}
                                  }
                              }}
                    />
                </div>

                <div className="flex flex-col w-60">
                    <label htmlFor="buttondisplay" className="block mb-2">
                        Oră preluare
                    </label>
                    <Calendar value={pickupHour} onChange={(e) => setPickupHour(e.value)} showIcon timeOnly
                              icon={() => <i className="pi pi-clock"/>}
                              pt={{
                                  dropdownButton: {
                                      root: {className: 'bg-myblue border-myblue'}
                                  }
                              }}/>
                </div>
                <div className="flex flex-col w-60">
                    <label htmlFor="buttondisplay" className="block mb-2">
                        Oră preluare
                    </label>
                    <Calendar value={pickupHour} onChange={(e) => setPickupHour(e.value)} showIcon timeOnly
                              icon={() => <i className="pi pi-clock"/>}
                              pt={{
                                  dropdownButton: {
                                      root: {className: 'bg-myblue border-myblue'}
                                  }
                              }}/>
                </div>

                <div className="flex flex-col">
                    <Button label="Rezervă"
                            className="bg-myblue text-white py-2 mt-10 rounded"/>
                </div>
            </div>
        </>
    );
}

export default CarRentalForm;