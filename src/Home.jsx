import React, { useState } from "react"
import {Calendar} from "primereact/calendar";
// import { mostSearched } from "../../components/assets/data/data"
// import { FilterCard, PopularBrands, Sliders } from "../../router/router"
// import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

import {PrimeReactProvider} from "primereact/api";

export const Home = () => {
    // const [mostSearchData, setMostSearchData] = useState(mostSearched)
    //
    // console.log(setMostSearchData)
    const [date, setDate] = useState(null);

    return (
        <>
            {/*<PrimeReactProvider>*/}
           <div className="container">
               <div className="row">
                   <div className="card flex flex-wrap gap-3 p-fluid">
                       <div className="flex-auto">
                           <label htmlFor="pickupdate" className="font-bold block mb-2">
                               Pickup Date
                           </label>
                           <Calendar id="pickupdate" value={date} onChange={(e) => setDate(e.value)} showIcon />
                       </div>
                       <div className="flex-auto">
                           <label htmlFor="dropoffdate" className="font-bold block mb-2">
                               Drop off date
                           </label>
                           <Calendar id="dropoffdate" value={date} onChange={(e) => setDate(e.value)} showIcon  />
                       </div>
                   </div>
               </div>
               <div className="row">
                   <div className="flex-auto">
                       <label htmlFor="buttondisplay" className="font-bold block mb-2">
                           Icon Template
                       </label>
                       <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly  icon={() => <i className="pi pi-clock" />} />
                   </div>
               </div>
           </div>
            {/*</PrimeReactProvider>*/}
        </>
    )
}
