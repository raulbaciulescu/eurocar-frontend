import React, {useState} from "react";
import {Link} from "react-router-dom";
import {navList} from "./Data";
import SocialIcons from "./SocialIcons";
import logo from "./logo2.svg"

export default function Header() {
    const [navbarCollapse, setNavbarCollapse] = useState(false);

    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (itemId) => {
        setActiveDropdown(itemId);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <>
            {/*<div className="container mx-auto px-4">*/}
            {/*    <div className="lg:flex lg:items-center lg:justify-between bg-dark">*/}
            {/*        <div className="lg:flex lg:items-center lg:w-1/4">*/}
            {/*            <Link to="/" className="block mt-4 lg:mt-0">*/}
            {/*                <img src={logo} alt='logo' className="h-16 lg:h-auto" />*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*        <div className="lg:flex lg:w-3/4">*/}
            {/*            <nav className="lg:flex lg:justify-end">*/}
            {/*                <button*/}
            {/*                    type="button"*/}
            {/*                    className="lg:hidden block ml-auto mr-4 mt-4"*/}
            {/*                    onClick={() => setNavbarCollapse(!navbarCollapse)}*/}
            {/*                >*/}
            {/*                    <svg className="h-6 w-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
            {/*                        <path className="heroicon-ui" d="M4 6h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1zm16 4H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm0 6H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1z"/>*/}
            {/*                    </svg>*/}
            {/*                </button>*/}
            {/*                <div className={`${navbarCollapse ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-full lg:justify-between`}>*/}
            {/*                    <div className="lg:flex lg:justify-end">*/}
            {/*                        {navList.map((item, index) => (*/}
            {/*                            <Link key={index} to={item.path} className="block px-4 py-2 text-white hover:bg-gray-800 lg:mt-0">*/}
            {/*                                {item.text}*/}
            {/*                            </Link>*/}
            {/*                        ))}*/}
            {/*                    </div>*/}
            {/*                    <div className="lg:flex lg:items-center lg:ml-4 lg:mt-0">*/}
            {/*                        /!* Aici adaugă componenta SocialIcons sau codul corespunzător *!/*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </nav>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt='logo' className="h-8 mr-4"  />
                    <h1 className="text-xl font-bold">Eurocar GSM</h1>
                </div>
                <div className="flex items-center">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded mr-4">Contact</button>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">About</button>
                </div>
            </header>
        </>
    );
}
