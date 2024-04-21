import React, {useEffect, useState} from 'react';
import AdminHeader from "../AdminHeader";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {eurocarService} from "../services/eurocarService";


const AdminTablePage = () => {
    const [rents, setRents] = useState(null);

    useEffect(() => {
        eurocarService.getRents()
            .then(r =>
                setRents(r)
            )
    }, []);

    return (
        <>
            <div className="h-screen">
                <AdminHeader/>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <DataTable value={rents} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="firstname" header="Prenume"></Column>
                        <Column field="lastname" header="Nume"></Column>
                        <Column field="email" header="Email"></Column>
                        <Column field="phoneNumber" header="Telefon"></Column>
                        <Column field="pickupDate" header="Dată Preluare"></Column>
                        <Column field="dropoffDate" header="Dată Predare"></Column>
                        <Column field="pickupHour" header="Oră Preluare"></Column>
                        <Column field="dropoffHour" header="Oră Predare"></Column>
                        <Column field="pickupCity" header="Oraș preluare"></Column>
                        <Column field="dropOffCity" header="Oraș Predare"></Column>
                        <Column field="carId" header="Car ID"></Column>
                    </DataTable>
                </div>
            </div>
        </>
    );
}

export default AdminTablePage;