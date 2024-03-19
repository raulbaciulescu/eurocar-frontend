import React, {useState} from "react"
import {Calendar} from "primereact/calendar";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Button} from "primereact/button";
import {Dropdown} from 'primereact/dropdown';
import image1 from "./images/ss-removebg-preview.png"
import image2 from "./images/ss2-removebg-preview.png"

export const TestAbsolute = () => {
    return (
        <>
            <div className="w-full h-auto bg-no-repeat bg-cover bg-left bg-fixed bg-myblue py-32">
                <div className="flex flex-col items-center p-6">
                    {/*<div className="w-2/4 h-40 bg-white p-6 m-6 rounded-full">*/}
                    {/*    <img src={image1} alt="" width="330px"/>*/}
                    {/*</div>*/}
                    <div className="flex relative w-2/5 h-40 bg-white p-6 mb-20 rounded-full">
                        {/*<div className="flex">*/}
                        <div className="w-1/2"></div>
                        <img src={image1} alt="" className="absolute left-2.5 bottom-1" width="330px"/>
                        <div className="flex w-1/2  items-center justify-center">
                            <h1 className="text-2xl">TEXT</h1>
                        </div>
                        {/*</div>*/}
                    </div>
                    <div className="relative w-2/5 h-40 bg-white p-6 mt-20 rounded-full">
                        <img src={image2} alt="" className="absolute left-2.5 bottom-0.5" width="330px"/>
                    </div>
                    {/*<div className="w-2/4 h-40 bg-white p-6 m-6 rounded-full"></div>*/}
                </div>

            </div>
        </>
    )
}


