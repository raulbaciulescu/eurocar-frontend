import React from "react"
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
import {Link} from "react-router-dom";

export const CarSection = ({computedPrice}) => {
    return (
        <>
            <div className="w-full h-2/5 bg-myblue pt-20">
                <div className="flex flex-col items-center p-6">
                    <div className="flex relative bg-white w-2/5 h-40 p-6 mb-20 rounded-full">
                        <div className="w-1/2 "></div>
                        <img src="/images/ss2-removebg-preview.png" alt="" className="absolute left-2.5 bottom-1"
                             width="300px"/>
                        <div className="flex w-1/2  items-center justify-center">
                            <h1 className="text-2xl mr-4">
                                OPEL VIVARO 1.6
                            </h1>
                            <h1 className="text-2xl">
                                {
                                 computedPrice !== 0 ?
                                     computedPrice + "Lei" :
                                     ""
                                }
                            </h1>
                            <Link to={"rent/car1"}>
                                <Button text className="text-myblue" label="Închiriază"></Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex relative w-2/5 h-40 bg-white p-6 mb-20 rounded-full">
                        <div className="w-1/2"></div>
                        <img src="/images/ss-removebg-preview.png" alt="" className="absolute left-2.5 bottom-1"
                             width="300px"/>
                        <div className="flex w-1/2  items-center justify-center">
                            <h1 className="text-2xl mr-4">
                                OPEL VIVARO 1.6
                            </h1>
                            <h1 className="text-2xl">
                                {
                                    computedPrice !== 0 ?
                                        computedPrice + "Lei" :
                                        ""
                                }
                            </h1>
                            <Link to={"rent/car2"}>
                                <Button text className="text-myblue" label="Închiriază"></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


