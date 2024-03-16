import React, {useState} from "react"
import {Calendar} from "primereact/calendar";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
import {Dropdown} from 'primereact/dropdown';

export const Home = () => {
    const [pickupDate, setPickupDate] = useState(null);
    const [dropOffDate, setDropOffDate] = useState(null);
    const [pickupHour, setPickupHour] = useState(null);
    const [dropoffHour, setDropoffHour] = useState(null);

    const [pickupCity, setPickupCity] = useState(null);
    const [dropoffCity, setDropoffCity] = useState(null);
    const cities = [
        {name: 'Târgu Mureș', code: 'TGM'},
        {name: 'Cluj-Napoca', code: 'CJ'},
        {name: 'Sighișoara', code: 'SG'},
        {name: 'Brașov', code: 'BV'},
    ];

    return (
        <>
            <div className="w-full min-h-screen bg-no-repeat bg-cover bg-left bg-fixed bg-[url('./bg3.PNG')] pt-32">
                <div className="max-w-md bg-[#121328] bg-opacity-60 rounded-lg overflow-hidden shadow-2xl p-6 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-28">
                    <div className="flex items-center justify-center">
                        <h1 className="font-bold text-2xl text-white">Închirieaza o mașină</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="flex flex-col">
                            <label htmlFor="pickupdate" className="mb-2 text-white">
                                Dată preluare
                            </label>
                            <Calendar id="pickupdate" value={pickupDate} onChange={(e) => setPickupDate(e.value)}
                                      showIcon
                                      pt={{
                                          input: {
                                              root: {className: 'border-myblue'}
                                          },
                                          dropdownButton: {
                                              root: {className: 'bg-myblue border-myblue'}
                                          }
                                      }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="dropoffdate" className="block mb-2 text-white">
                                Dată predare
                            </label>
                            <Calendar id="dropoffdate" value={dropOffDate} onChange={(e) => setDropOffDate(e.value)}
                                      showIcon
                                      pt={{
                                          input: {
                                              root: {className: 'border-myblue'}
                                          },
                                          dropdownButton: {
                                              root: {className: 'bg-myblue border-myblue'}
                                          }
                                      }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                Oră preluare
                            </label>
                            <Calendar value={pickupHour} onChange={(e) => setPickupHour(e.value)} showIcon timeOnly
                                      icon={() => <i className="pi pi-clock"/>}
                                      pt={{
                                          input: {
                                              root: {className: 'border-myblue'}
                                          },
                                          dropdownButton: {
                                              root: {className: 'bg-myblue border-myblue'}
                                          }
                                      }}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="buttondisplay" className="block mb-2 text-white">
                                Oră predare
                            </label>
                            <Calendar value={dropoffHour} onChange={(e) => setDropoffHour(e.value)} showIcon timeOnly
                                      icon={() => <i className="pi pi-clock"/>}
                                      pt={{
                                          input: {
                                              root: {className: 'border-myblue'}
                                          },
                                          dropdownButton: {
                                              root: {className: 'bg-myblue border-myblue'}
                                          }
                                      }}
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
                                    className="w-full p-button-outlined hover:myblue text-white py-2 mt-10 rounded"/>
                    </div>
                </div>
            </div>
        </>
    )
}
