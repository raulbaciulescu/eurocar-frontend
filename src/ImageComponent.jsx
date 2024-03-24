import React, {useContext, useEffect, useRef, useState} from 'react';
import logo from "./logo-gray.svg"
// import image1 from "./images/IMG-20240309-WA0000.jpg"
// import image2 from "./images/IMG-20240309-WA0007.jpg"
import {Image} from 'primereact/image';
import {Galleria} from "primereact/galleria";
import {AppContext} from "./App";


export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: './images/IMG-20240309-WA0008.jpg',
                thumbnailImageSrc: './images/IMG-20240309-WA0008.jpg',
                alt: 'Description for Image 1',
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};


const ImageComponent = () => {
    const {selectedCar} = useContext(AppContext);
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleria = useRef(null);

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{width: '100%', display: 'block'}}/>;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{display: 'block'}}/>;
    }

    return (
        <div className="card flex flex-col justify-content-center">
            <div className="max-w-4xl pb-6">
                <Image src="/images/better.PNG" zoomInIcon alt="Image" width="250" height="250" preview/>
            </div>
            <Galleria ref={galleria} value={images} numVisible={7} style={{maxWidth: '850px'}}
                      activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                      circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate}
                      thumbnail={thumbnailTemplate}/>
            <div className="grid grid-rows-4 grid-flow-col gap-4" style={{maxWidth: '300px'}}>
                {
                    images && images.map((image, index) => {
                        let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt} style={{cursor: 'pointer'}} onClick={
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