import React, {useState} from "react"
import {Calendar} from "primereact/calendar";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
import {Dropdown} from 'primereact/dropdown';
import image1 from "./images/ss-removebg-preview.png"
import image2 from "./images/ss2-removebg-preview.png"

export const CarPage = () => {
    return (
        <>
            {/*<div className="w-full h-auto bg-no-repeat bg-cover bg-left bg-fixed bg-myblue py-32">*/}
            {/*    <div className="flex flex-col items-center p-6">*/}
            {/*        <div className="flex relative w-2/5 h-40 bg-white p-6 mb-20 rounded-full">*/}
            {/*            <div className="w-1/2">*/}
            {/*                <img src={image1} alt="" className="absolute left-2.5 bottom-1" width="330px"/>*/}
            {/*            </div>*/}
            {/*            <div className="flex w-1/2  items-center justify-center">*/}
            {/*                <h1 className="text-2xl">TEXT</h1>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="w-full h-auto bg-no-repeat bg-cover bg-left bg-fixed bg-myblue py-32">*/}
            {/*    <div className="flex flex-col items-center p-6">*/}
            {/*        <div className="w-full md:w-2/5 bg-white p-6 mb-20 rounded-full relative">*/}
            {/*            <div className="flex justify-center items-center">*/}
            {/*                <img src={image1} alt="" className="w-1/2 md:absolute md:left-0 md-bottom-0" />*/}
            {/*                <div className="flex flex-col justify-center items-center md:w-1/2">*/}
            {/*                    <h1 className="text-2xl">TEXT</h1>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="w-full h-auto bg-no-repeat bg-cover bg-left bg-fixed bg-myblue py-32">
                <div className="flex flex-col items-center p-6">
                    <div className="flex relative w-2/5 h-40 bg-white p-6 mb-20 rounded-full">
                        <div className="w-1/2"></div>
                        <img src={image1} alt="" className="absolute left-2.5 bottom-1" width="330px"/>
                        <div className="flex w-1/2  items-center justify-center">
                            <h1 className="text-2xl">300 Lei</h1>
                        </div>
                    </div>
                    <div className="flex relative w-2/5 h-40 bg-white p-6 mb-20 rounded-full">
                        <div className="w-1/2"></div>
                        <img src={image2} alt="" className="absolute left-2.5 bottom-1" width="330px"/>
                        <div className="flex w-1/2  items-center justify-center">
                            <h1 className="text-2xl">TEXT</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


