import React, {useState} from "react"
import {Calendar} from "primereact/calendar";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

import {CarCard2} from "../CarCard2";

export const CarWithPricePage = () => {
    return (
        <>
            {/*<div className="flex items-center">*/}
            {/*    <div className="lg:h-screen w-full items-center flex flex-col">*/}
            {/*        <div className="w-2/4 flex h-16 items-center">*/}
            {/*            <CarCard2/>*/}
            {/*            <CarCard2/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="flex items-center h-screen">
                <div className="w-full items-center">
                    <div className="w-3/4 flex flex-col items-center">
                        <CarCard2/>
                        <CarCard2/>
                    </div>
                    {/*<div className="w-3/5 flex">*/}
                    {/*</div>*/}
                </div>
            </div>

        </>
    )
}

