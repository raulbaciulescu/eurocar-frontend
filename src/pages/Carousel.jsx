import React, {useState} from "react";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import logo from "../logo1.svg";

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
            <div className="lg:bg-bgspecial1 bg-phone bg-no-repeat bg-cover h-screen">
                <header className="bg-transparent text-white p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="inline-block">
                            <img src={logo} alt='logo' className="h-12 mr-4"/>
                        </Link>
                        <h1 className="text-xl font-bold">Eurocar GMN</h1>
                    </div>
                </header>
                <div className="w-full mt-20 flex items-center flex-wrap">
                    <div className="lg:w-2/5 w-full lg:order-2 md:order-2">
                        <div className="flex items-center h-96 relative">
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
                    <div className="lg:w-3/5 text-white lg:order-1 md:order-1">
                        <div className="flex flex-col items-center">
                            <h1 className="lg:text-5xl text-2xl mt-20">
                                {texts[index].title}
                            </h1>
                            <p className="lg:text-xl mt-6 ml-4">
                                Închiriază la numărul de telefon: {texts[index].phoneNumber}
                            </p>
                            <Button icon="pi pi-chevron-right"
                                    className="p-button-rounded p-button-text text-white"
                                    onClick={handleNext}/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};


export default Carousel;