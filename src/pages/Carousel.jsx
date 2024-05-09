import React, {useState} from "react";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import logo from "../logo1.svg";
import Header from "../Header";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/images/with_shadow-removebg-preview.png",
        "/images/specialcar2.png",
    ];
    const texts = [
        {
            title: "Mercedes-Benz W126",
            phoneNumber: "0740632150"
        },
        {
            title: "Mercedes-Benz W140", // Add the same text
            phoneNumber: "0740632150"
        },
    ];

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className="w-full h-screen flex bg-bgspecial1 bg-no-repeat bg-cover items-center">
                {/*<header className="bg-[#121328] text-white p-4 flex justify-between items-center">*/}
                {/*    <div className="flex items-center">*/}
                {/*        <Link to="/" className="inline-block">*/}
                {/*            <img src={logo} alt='logo' className="h-12 mr-4"/>*/}
                {/*        </Link>*/}
                {/*        <h1 className="text-xl font-bold">Eurocar GMN</h1>*/}
                {/*    </div>*/}
                {/*</header>*/}
                <div className="w-4/5 text-white">
                    <div className="mx-24">
                        <h1 className="text-5xl">
                            {texts[index].title}
                        </h1>
                        <p className="text-xl mt-10 ml-6">
                            Închiriază la numărul de telefon: {texts[index].phoneNumber}
                        </p>
                    </div>
                </div>
                <div className="w-3/5">
                    <div className="h-96 relative">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt=""
                                className={`absolute inset-0 duration-500 ${
                                    i === index ? 'opacity-100' : 'opacity-0'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <Button icon="pi pi-chevron-right" className="p-button-rounded p-button-text" onClick={handleNext}
                        style={{position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)'}}/>
            </div>
        </>

    );
};


export default Carousel;