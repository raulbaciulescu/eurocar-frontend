import {createContext, useState} from "react";
import {cities} from "../utils/constants";

export const AppContext = createContext(null);

export const AppProvider = ({children}) => {
    const [pickupDate, setPickupDate] = useState(new Date());
    const [dropOffDate, setDropOffDate] = useState(new Date());
    const [pickupHour, setPickupHour] = useState(new Date());
    const [dropoffHour, setDropoffHour] = useState(new Date());
    const [pickupCity, setPickupCity] = useState(cities[0]);
    const [dropoffCity, setDropoffCity] = useState(cities[0]);

    const updatePickupDate = (pickupDate) => {
        setPickupDate(pickupDate);
    }

    const updateDropOffDate = (dropOffDate) => {
        setDropOffDate(dropOffDate);
    }

    const updatePickupHour = (pickupHour) => {
        setPickupHour(pickupHour);
    }

    const updateDropOffHour = (dropoffHour) => {
        setDropoffHour(dropoffHour);
    }

    const updatePickupCity = (pickupCity) => {
        setPickupCity(pickupCity);
    }

    const updateDropoffCity = (dropoffCity) => {
        setDropoffCity(dropoffCity);
    }

    return (
        <AppContext.Provider value={{
            pickupDate,
            updatePickupDate,
            dropOffDate,
            updateDropOffDate,
            pickupHour,
            updatePickupHour,
            dropoffHour,
            updateDropOffHour,
            pickupCity,
            updatePickupCity,
            dropoffCity,
            updateDropoffCity
        }}>
            {children}
        </AppContext.Provider>
    );
};