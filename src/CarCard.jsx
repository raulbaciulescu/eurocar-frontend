import React from 'react';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Badge} from "primereact/badge";

const CarCard = ({car, days}) => {
    const header = (
        <img src={car.image} alt={car.name} className="w-full object-cover rounded-lg"/>
    );
    const footer = (
        <>
            <div className="w-full">
                <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{marginLeft: '0.5em'}}/>
            </div>
        </>
    );

    return (
        <>


            <div className="max-w-64 bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-8">
                    <img src={car.image} alt={car.name} className="w-full h-50 object-cover rounded-lg"/>
                </div>
                <div className="px-3 pb-3">
                    <h2 className="text-xl font-semibold">{car.name}</h2>
                    <p className="text-gray-600 mb-2 text-right">${car.price}</p>
                    <Button label="Add to Cart" className="p-button-outlined w-full"/>
                </div>
            </div>

            {/*<div className='box border border-gray-200 rounded-md' key={car.id}>*/}
            {/*    <img src={car.image} alt='cover'/>*/}
            {/*    <div className='text p-4'>*/}
            {/*        <h3>{car?.name}</h3>*/}
            {/*        <h2 className='text-lg font-medium py-3'>{car?.price}</h2>*/}
            {/*        <Button label="Add to Cart" icon="pi pi-shopping-cart" className="primary-btn-outline w-full"/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-2xl m-4 sm:m-8 md:m-16 lg:m-24 xl:m-28">
                <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header}
                      className="md:w-25rem">
                </Card>
                {/*<SneakerCard car={car}/>*/}
            </div>
        </>
    );
};


const SneakerCard = ({car, days}) => {
    const sneaker = {
        name: 'Sneaker',
        price: '$990',
        quality: 'Premium',
    };

    return (
        <Card title={sneaker.name} subTitle={`${sneaker.quality} Quality`}>
            <img src={car.image} alt='cover'/>
            <p>
                <Badge severity="info">{sneaker.price}</Badge>
            </p>
            <Button label="Add to Cart" icon="pi pi-shopping-cart" className="p-button-outlined"/>
        </Card>
    );
};

export default CarCard;