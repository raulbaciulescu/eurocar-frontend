import React, {useContext} from "react"
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
// import image1 from "./images/ss-removebg-preview.png"
// import image2 from "./images/ss2-removebg-preview.png"
import {Link} from "react-router-dom";
import {AppContext} from "./App"; // sau orice alt mod de gestionare a rutării

export const CarSection = () => {
    return (
        <>
            <div className="w-full h-2/5 bg-myblue pt-20">
                <div className="flex flex-col items-center p-6">
                    <div className="flex relative bg-white w-2/5 h-40 p-6 mb-20 rounded-full">
                        <div className="w-1/2 "></div>
                        <img src="/images/ss2-removebg-preview.png" alt="" className="absolute left-2.5 bottom-1"
                             width="300px"/>
                        <div className="flex w-1/2  items-center justify-center">
                            <h1 className="text-2xl">
                                OPEL VIVARO 1.6
                            </h1>
                            <Link reloadDocument to={"rent/car1"}>
                                <Button text>Închiriază</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex relative w-2/5 h-40 bg-white p-6 mb-20 rounded-full">
                        <div className="w-1/2"></div>
                        <img src="/images/ss-removebg-preview.png" alt="" className="absolute left-2.5 bottom-1"
                             width="300px"/>
                        <div className="flex w-1/2  items-center justify-center">
                            <h1 className="text-2xl">
                                OPEL VIVARO 1.6
                            </h1>
                            <Link reloadDocument to={"rent/car2"}>
                                <Button text>Închiriază</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


