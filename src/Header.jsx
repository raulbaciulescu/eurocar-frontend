import React from "react";
import {Link} from "react-router-dom";
import {Button} from "primereact/button"

export default function Header() {
    return (
        <>
            <header className="bg-[#121328] text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="inline-block">
                        <img src="/logo.svg" alt='logo' className="h-12 mr-4"/>
                    </Link>
                    <h1 className="text-xl font-bold">Eurocar GMN</h1>
                </div>
                <div className="flex items-center">
                    <Link to="/special-cars" className="inline-block">
                        <Button label="Mașini Speciale" style={{color: 'white'}} text/>
                    </Link>
                </div>
            </header>
        </>
    );
}
