import React, {useContext, useRef, useState} from "react"
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {eurocarService} from "../services/eurocarService";
import {CarSection} from "../CarSection";
import Header from "../Header";
import {AppContext} from "../appProvider";
import {Toast} from "primereact/toast";
import {MainForm} from "../MainForm";

export const MainPage = () => {
    const toast = useRef(null);
    const commentSectionRef = useRef(null);
    const [computedPrice, setComputedPrice] = useState(0);
    const [disabledDatesState, setDisabledDatesState] = useState([]);
    const [shownCars, setShownCars] = useState([1, 2])

    const dateTemplate = (date) => {
        let tempDate = new Date(date.year, date.month, date.day);
        let today = new Date();
        if (tempDate < today) {
            return (
                <strong style={{textDecoration: 'line-through'}}>{date.day}</strong>
            );
        }

        return date.day;
    }

    const scrollToCarSection = () => {
        commentSectionRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <Toast ref={toast}/>
            <div className="h-screen">
                <Header/>
                <div className="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed bg-mybg pt-10">
                    <MainForm scrollToCarSection={scrollToCarSection}
                              setComputedPrice={(price) => {
                                  setComputedPrice(price)
                              }}
                              setShownCars={(availableCars) => setShownCars(availableCars)}
                    />
                </div>
            </div>
            <div ref={commentSectionRef} className="w-full h-2/5 bg-myblue pt-20">
                <CarSection computedPrice={computedPrice} shownCars={shownCars}/>
            </div>
        </>
    )
}
