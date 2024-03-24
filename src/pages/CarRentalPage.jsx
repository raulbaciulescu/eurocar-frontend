import React, {useContext} from 'react';
import ImageComponent from "../ImageComponent";
import CarRentalForm from "../CarRentalForm";
import {AppContext} from "../App";
import {useParams} from "react-router-dom";

const CarRentalPage = () => {
    const { selectedCar } = useParams();

    return (
        <div className="flex items-center">
            <div className="w-full items-center flex flex-col">
                <div className="w-3/5 flex h-16 items-center py-6">
                    <h1 className="text-2xl pl-10">
                        {selectedCar}
                    </h1>
                </div>
                <div className="w-3/5 flex">
                    <div className="flex w-full flex-wrap justify-center">
                        <div className="lg:basis-1/3">
                            <ImageComponent/>
                        </div>
                        <div className="basis-2/3">
                            <div className="flex flex-wrap justify-center">
                                <div className="basis-2/4 lg:order-2">
                                    <table className="w-auto text-center my-6">
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
                                <div className="basis-2/4 mb-6 lg:order-1">
                                    <CarRentalForm/>
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