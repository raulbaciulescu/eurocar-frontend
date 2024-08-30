import React from "react"
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
import {Link} from "react-router-dom";

export const CarSection = ({computedPrice, shownCars}) => {
    return (
        <>
            <div className="w-full bg-myblue pt-16">
                <div className="flex flex-col items-center p-6">
                    {/*<p className="text-white text-2xl mb-20">Masinile disponibile din data de pana in data de</p>*/}
                    {
                        shownCars.includes(1) ?
                            <div className="flex relative sm:w-4/5 lg:w-2/5 mb-20 h-40 bg-white p-6 rounded-full">
                                <div className="w-2/5">
                                    <img src="/images/preview-car2.png" alt=""
                                         className="lg:w-2/5 lg:absolute left-2.5 bottom-1"
                                         width="300px"/>
                                </div>
                                <div className="w-3/5 flex flex-col">
                                    <h1 className="lg:text-xl mx-6">
                                        Opel Vivaro 1.6 diesel, 125cp, 8+1 locuri
                                    </h1>
                                    <hr className="border-gray-200 lg:my-2"/>
                                    <div className="flex justify-between items-center">
                                        <Link to={"rent/car1"}>
                                            <Button text className="text-myblue" label="Închiriază"></Button>
                                        </Link>
                                        <p className="font-bold text-gray-900 mr-6">
                                            {
                                                computedPrice !== 0 ? computedPrice + "€" : ""
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div> : ""
                    }
                    {
                        shownCars.includes(2) ?
                            <div className="flex relative sm:w-4/5 lg:w-2/5 mb-20 h-40 bg-white p-6 rounded-full">
                                <div className="w-2/5">
                                    <img src="/images/preview-car1.png" alt=""
                                         className="lg:w-2/5 lg:absolute left-2.5 bottom-1"
                                         width="300px"/>
                                </div>
                                <div className="w-3/5 flex flex-col">
                                    <h1 className="lg:text-xl mx-6">
                                        Opel Vivaro 1.6 diesel, 125cp, 8+1 locuri
                                    </h1>
                                    {/*<hr className="border-gray-200 lg:my-4"/> with short text */}
                                    <hr className="border-gray-200 lg:my-2"/>
                                    <div className="flex justify-between items-center">
                                        <Link to={"rent/car2"}>
                                            <Button text className="text-myblue" label="Închiriază"></Button>
                                        </Link>
                                        <p className="font-bold text-gray-900 mr-6">
                                            {
                                                computedPrice !== 0 ? computedPrice + "€" : ""
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div> : ""
                    }
                </div>
            </div>

            <div className="w-full bg-white">
                <div className="flex flex-col p-6">
                    <h1 className="flex text-3xl flex-col p-6 text-myblue">Închirieri microbuze în Targu Mures 8 + 1</h1>

                    <p className="text-lg mb-5 mx-20">Dacă ai nevoie de un vehicul pentru transportul unui grup mare, pentru o excursie de câteva zile sau pentru un transport rapid și eficient, îți punem la dispoziție serviciul nostru de închiriere microbuze Opel Vivaro cu 8+1 locuri la Eurocar GMN. Suntem dedicați să oferim servicii de închiriere microbuze de cea mai înaltă calitate în Târgu Mureș, Cluj-Napoca, Sighișoara, Bistrița, Sibiu și Brașov.
                    </p>
                    <p className="text-3xl p-6 text-myblue">
                        De ce să Alegi Eurocar GMN?
                    </p>
                    <ul className="text-lg mx-20">
                        <li>
                            • Confort și Siguranță: Microbuzele noastre sunt moderne și bine întreținute.
                        </li>
                        <li>
                            • Prețuri Accesibile: Tarife competitive și oferte atractive.
                        </li>
                        <li>
                            • Flexibilitate: Preluare și predare în multiple orașe.
                        </li>
                        <li>
                            • Rezervare Rapidă: Proces simplu de rezervare online sau telefonic.
                        </li>
                    </ul>


                </div>
            </div>
        </>
    )
}


