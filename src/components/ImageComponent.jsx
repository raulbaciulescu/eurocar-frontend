import React, {useEffect, useRef, useState} from 'react';
import {Image} from 'primereact/image';
import {Galleria} from "primereact/galleria";
import {useParams} from "react-router-dom";


export const PhotoService = {
    getData(selectedCar) {
        return [
            {
                itemImageSrc: `/images/${selectedCar}/1.jpg`,
                thumbnailImageSrc: `/images/${selectedCar}/1.jpg`,
                alt: 'Image',
            },
            {
                itemImageSrc: `/images/${selectedCar}/2.jpg`,
                thumbnailImageSrc: `/images/${selectedCar}/2.jpg`,
                alt: 'Image',
            },
            {
                itemImageSrc: `/images/${selectedCar}/3.jpg`,
                thumbnailImageSrc: `/images/${selectedCar}/3.jpg`,
                alt: 'Image',
            },
            {
                itemImageSrc: `/images/${selectedCar}/4.jpg`,
                thumbnailImageSrc: `/images/${selectedCar}/4.jpg`,
                alt: 'Image',
            },
            {
                itemImageSrc: `/images/${selectedCar}/5.jpg`,
                thumbnailImageSrc: `/images/${selectedCar}/5.jpg`,
                alt: 'Image',
            },
            {
                itemImageSrc: `/images/${selectedCar}/6.jpg`,
                thumbnailImageSrc: `/images/${selectedCar}/6.jpg`,
                alt: 'Image',
            },
        ];
    },

    getImages(selectedCar) {
        return Promise.resolve(this.getData(selectedCar));
    }
};


const ImageComponent = () => {
    const {selectedCar} = useParams();
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleria = useRef(null);

    useEffect(() => {
        PhotoService.getImages(selectedCar).then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{width: '100%', display: 'block'}}/>;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt}/>;
    }

    return (
        <div className="card flex flex-col justify-content-center">
            <div className="max-w-4xl pb-6">
                <Image src={`/images/${selectedCar}/main.PNG`} zoomInIcon alt="Image" width="250" height="250" preview/>
            </div>
            <Galleria ref={galleria} value={images} numVisible={7} style={{maxWidth: '800px'}}
                      activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                      circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate}
                      thumbnail={thumbnailTemplate}/>
            <div className="grid grid-rows-4 grid-flow-col gap-4" style={{maxWidth: '300px'}}>
                {
                    images && images.map((image, index) => {
                        let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt}
                                         style={{cursor: 'pointer', width: 70, height: 70, "object-fit": "cover"}} onClick={
                            () => {
                                setActiveIndex(index);
                                galleria.current.show()
                            }
                        }/>
                        return (
                            <div className="col-3" key={index}>
                                {imgEl}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageComponent;