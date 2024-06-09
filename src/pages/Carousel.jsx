import React, {useEffect, useRef, useState} from "react";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import logo from "../logo1.svg";
import {Galleria} from "primereact/galleria";


export const SpecialCarsService = {
    getData() {
        return [
            {
                itemImageSrc: `/images/special1/1.jpg`,
                thumbnailImageSrc: `/images/special1/1.jpg`,
                alt: 'Image',
            },
            {
                itemImageSrc: `/images/special1/2.jpg`,
                thumbnailImageSrc: `/images/special1/2.jpg`,
                alt: 'Image',
            },
            {
                itemImageSrc: `/images/special2/1.jpg`,
                thumbnailImageSrc: `/images/special2/1.jpg`,
                alt: 'Image',
            },
            {
                itemImageSrc: `/images/special2/2.jpg`,
                thumbnailImageSrc: `/images/special2/2.jpg`,
                alt: 'Image',
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};


const Carousel = () => {
    const [index, setIndex] = useState(0);
    const cars = [
        "/images/png12.png",
        "/images/png22.png",
    ];
    const texts = [
        {
            title: "Mercedes-Benz W126",
            phoneNumber: "0740632150"
        },
        {
            title: "Mercedes-Benz W140",
            phoneNumber: "0740632150"
        },
    ];

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === 1 ? 0 : 1));
    };

    const [images, setImages] = useState(null);
    const galleria = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        SpecialCarsService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{width: '100%', display: 'block'}}/>;
    }

    return (
        <>
            <Galleria ref={galleria} value={images} showThumbnails={false} numVisible={9} style={{maxWidth: '800px'}}
                      circular fullScreen showItemNavigators item={itemTemplate}/>
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
                    <div className="lg:w-2/6 w-full lg:order-2 md:order-2">
                        <div className="flex items-center h-96 relative">
                            {cars.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt=""
                                    className={`cursor-pointer absolute inset-0 duration-500 ${
                                        i === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onClick={() => galleria.current.show()}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-3/6 w-full text-white lg:order-1 md:order-1 items-center ">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="lg:text-5xl text-2xl mt-20">
                                {texts[index].title}
                            </h1>
                            <p className="lg:text-xl mt-6">
                                Închiriază la numărul de telefon: {texts[index].phoneNumber}
                            </p>
                            <p className="lg:text-xl mt-6 cursor-pointer underline"  onClick={() => galleria.current.show()}>
                                Click pentru mai multe fotografii
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