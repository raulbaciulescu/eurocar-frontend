import React, {useEffect, useState} from 'react';
import {Calendar} from "primereact/calendar";
import {Dropdown} from "primereact/dropdown";
import AdminHeader from "../AdminHeader";
import {eurocarService} from "../services/eurocarService";
import NoAuthorization from "./NoAuthorization";


const AdminCalendarPage = () => {
    const [date, setDate] = useState(null);
    const [selectedCity, setSelectedCity] = useState({name: 'Mașina Albastră', code: 'blue'});
    const [rents, setRents] = useState([]);
    const cities = [
        {name: 'Mașina Albastră', code: 'blue'},
        {name: 'Mașina Albă', code: 'white'},
    ];

    useEffect(() => {
        eurocarService.getRents()
            .then(r => {
                setRents(r);
                //updateCalendar();
            })
    }, []);

    const dateTemplateBlue = (date) => {
        let tempDate = new Date(date.year, date.month, date.day);
        for (let i = 0; i < rents.length; i++) {
            if (rents[i].carId === 1) {
                let [day, month, year] = rents[i].pickupDate.split('.');
                const pickup = new Date(`${year}-${month}-${day}`);
                [day, month, year] = rents[i].dropoffDate.split('.');
                const dropoff = new Date(`${year}-${month}-${day}`);

                resetTimeToMidnight(pickup)
                resetTimeToMidnight(dropoff)
                resetTimeToMidnight(tempDate)

                if (tempDate >= pickup && tempDate <= dropoff)
                    return (
                        <strong style={{backgroundColor: "cyan"}}>{date.day}</strong>
                    );
            }
        }
        return date.day;
    }

    const resetTimeToMidnight = (date) => {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
    }

    const dateTemplateWhite = (date) => {
        let tempDate = new Date(date.year, date.month, date.day);
        for (let i = 0; i < rents.length; i++) {
            if (rents[i].carId === 2) {
                let [day, month, year] = rents[i].pickupDate.split('.');
                const pickup = new Date(`${year}-${month}-${day}`);
                [day, month, year] = rents[i].dropoffDate.split('.');
                const dropoff = new Date(`${year}-${month}-${day}`);

                resetTimeToMidnight(pickup)
                resetTimeToMidnight(dropoff)
                resetTimeToMidnight(tempDate)

                if (tempDate >= pickup && tempDate <= dropoff)
                    return (
                        <strong style={{backgroundColor: "yellow"}}>{date.day}</strong>
                    );
            }
        }
        return date.day;
    }

    const dateTemplateWhite2 = (date) => {
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
        setSelectedCity(car)
    }

    return (
        localStorage.getItem('token') != null ?
            <div className="h-screen">
                <AdminHeader/>
                <div className="w-full flex flex-col items-center justify-center">
                    <Dropdown className="m-10" value={selectedCity} onChange={(e) => onCarChange(e.value)}
                              options={cities}
                              optionLabel="name"
                              placeholder="Select a City"/>
                    <Calendar
                        className="lg:m-10"
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        inline showWeek
                        dateTemplate={selectedCity.code === "blue" ? dateTemplateBlue : dateTemplateWhite}
                    />
                </div>
            </div> :
            <NoAuthorization/>
    );
}

export default AdminCalendarPage;