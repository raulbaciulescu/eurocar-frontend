import React, {useContext, useEffect, useState} from 'react';
import ImageComponent from "../ImageComponent";
import CarRentalForm from "../CarRentalForm";
import {AppContext} from "../App";
import {useParams} from "react-router-dom";
import {Calendar} from "primereact/calendar";
import {Dropdown} from "primereact/dropdown";

const AdminPage = () => {
    const [date, setDate] = useState(null);
    const [selectedCity, setSelectedCity] = useState({name: 'masina albastra', code: 'blue'});
    const cities = [
        {name: 'masina albastra', code: 'blue'},
        {name: 'masina alba', code: 'white'},
    ];

    const dateTemplate = (date) => {
        //new Date(2024, 3, 25)
        let tempDate = new Date(date.year, date.month, date.day);
        let today = new Date();
        if (tempDate < today) {
            return (
                <strong style={{backgroundColor: "blue"}}>{date.day}</strong>
            );
        }

        return date.day;
    }

    const dateTemplateWhite = (date) => {
        //new Date(2024, 3, 25)
        let tempDate = new Date(date.year, date.month, date.day);
        let today = new Date();
        if (tempDate < today) {
            return (
                <strong style={{backgroundColor: "yellow"}}>{date.day}</strong>
            );
        }

        return date.day;
    }

    const onCarChange = (car) => {
        console.log(car.name)
        setSelectedCity(car)
    }

    return (
        <div className="h-screen">
            <div className="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed bg-mybg pt-20">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col w-2/3 py-6">
                        <Dropdown value={selectedCity} onChange={(e) => onCarChange(e.value)} options={cities}
                                  optionLabel="name"
                                  placeholder="Select a City"/>
                        <Calendar
                            value={date}
                            onChange={(e) => setDate(e.value)}
                            inline showWeek
                            dateTemplate={selectedCity.code === "blue" ?  dateTemplate : dateTemplateWhite}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;