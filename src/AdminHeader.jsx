import React, {useState} from "react";
import logo from "./logo1.svg"
import {Link} from "react-router-dom";
import {Button} from "primereact/button";

export default function AdminHeader() {
    return (
        <>
            <header className="bg-[#121328] text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="inline-block">
                        <img src={logo} alt='logo' className="h-12 mr-4"/>
                    </Link>
                    <h1 className="text-xl font-bold">Eurocar GMN</h1>
                </div>
                <div className="flex items-center">
                    <Link to="/admin/calendar" className="inline-block">
                        <Button label="Calendar" style={{color: 'white'}} text/>
                    </Link>
                    <Link to="/admin/table" className="inline-block">
                        <Button label="Tabel" style={{color: 'white'}} text/>
                    </Link>
                </div>
            </header>
        </>
    );
}
