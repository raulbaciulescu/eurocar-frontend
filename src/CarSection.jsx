import React from "react"
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
import {Link} from "react-router-dom";

export const CarSection = ({computedPrice}) => {
    return (
        <>
            <div className="w-full h-2/5 bg-myblue">
                <div className="flex flex-col items-center p-6">
                    <div className="flex relative sm:w-4/5 lg:w-2/5 mb-20 h-40 bg-white p-6 rounded-full">
                        <div className="w-2/5">
                            <img src="/images/ss2-removebg-preview.png" alt="" className="lg:w-2/5 lg:absolute left-2.5 bottom-1"
                                 width="300px"/>
                        </div>
                        <div className="w-3/5 flex flex-col">
                            <h1 className="text-2xl mx-6">
                                Opel Vivaro 1.6
                            </h1>
                            <hr className="border-gray-200 lg:my-4"/>
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
                    </div>


                    <div className="flex relative sm:w-4/5 lg:w-2/5 mb-20 h-40 bg-white p-6 rounded-full">
                        <div className="w-2/5">
                            <img src="/images/ss-removebg-preview.png" alt="" className="lg:w-2/5 lg:absolute left-2.5 bottom-1"
                                 width="300px"/>
                        </div>
                        <div className="w-3/5 flex flex-col">
                            <h1 className="text-2xl mx-6">
                                Opel Vivaro 1.6
                            </h1>
                            <hr className="border-gray-200 lg:my-4"/>
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
                    </div>
                </div>
            </div>
        </>
    )
}


