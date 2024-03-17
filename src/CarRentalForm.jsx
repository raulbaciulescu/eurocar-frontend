import React from 'react';
import logo from "./logo1.svg"
import ImageComponent from "./ImageComponent";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

const CarRentalForm = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col">
                <label htmlFor="username" className="block my-2">Nume</label>
                <InputText id="username" aria-describedby="username-help"/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="username" className="block my-2">Prenume</label>
                <InputText id="username" aria-describedby="username-help"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="username" className="block my-2">Email</label>
                <InputText id="username" aria-describedby="username-help"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="username" className="block my-2">Număr telefon</label>
                <InputText id="username" aria-describedby="username-help"/>
            </div>

            <Button label="Rezervă"
                    className="bg-myblue text-white py-2 mt-10 rounded"/>
        </div>
    );
}

export default CarRentalForm;