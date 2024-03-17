import React from 'react';
import logo from "./logo1.svg"
import ImageComponent from "./ImageComponent";
import CarRentalForm from "./CarRentalForm";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Calendar} from "primereact/calendar";

const CarRentalPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="h-screen w-full items-center flex flex-col">
                <div className="w-2/3 flex h-16 items-center">
                    <h1 className="text-2xl pl-10">Opel Astra</h1>
                </div>
                <div className="w-2/3 flex">
                    <div className="flex w-full">
                        <div className="basis-1/3">
                            <ImageComponent/>
                        </div>
                        <div className="basis-2/3">
                            <div className="flex w-full">
                                <div className="basis-3/4 items-center justify-center">
                                    <CarRentalForm/>
                                </div>
                                <div className="basis-1/4 border-y-green-600">
                                    <table className="w-full text-center">
                                        <thead>
                                        <tr className="bg-gray-200">
                                            <th className="px-4 py-2">Durata</th>
                                            <th className="px-4 py-2">Preț</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">1-3 zile</td>
                                            <td className="border px-4 py-2">45€</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">4-7 zile</td>
                                            <td className="border px-4 py-2">40€</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">8-14 zile</td>
                                            <td className="border px-4 py-2">35€</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">15-21 zile</td>
                                            <td className="border px-4 py-2">30€</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CarRentalPage;