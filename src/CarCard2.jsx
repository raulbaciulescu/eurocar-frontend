import React from 'react';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Badge} from "primereact/badge";
import image1 from "./images/ss-removebg-preview.png";
import {Link} from "react-router-dom";

export const CarCard2 = () => {
    return (
        <>
            <div className="flex bg-myblue w-2/5 h-40 mb-20 rounded-lg">
                <div className="w-1/2 ">
                    <img src={image1} alt="" className="" width="330px"/>
                </div>

                <div className="flex w-1/2 items-center justify-center">
                    <div className="flex flex-col">
                        <h1 className="text-white">Opel astra</h1>
                        <h1 className="text-2xl text-white pr-4">300 Lei</h1>
                        <Link to="/ok">
                            <Button>Rent!</Button>
                        </Link>
                    </div>
                </div>

            </div>

        </>
    );
};