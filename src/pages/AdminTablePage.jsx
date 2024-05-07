import React, {useEffect, useState} from 'react';
import AdminHeader from "../AdminHeader";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {eurocarService} from "../services/eurocarService";
import {InputText} from "primereact/inputtext";
import {Calendar} from "primereact/calendar";
import NoAuthorization from "./NoAuthorization";


const AdminTablePage = () => {
    const [rents, setRents] = useState(null);

    useEffect(() => {
        eurocarService.getRents()
            .then(r =>
                setRents(r)
            )
    }, []);

    const onCellEditComplete = (e) => {
        let {rowData, newValue, field, originalEvent: event} = e;
        switch (field) {
            case 'pickupDate':
                rowData[field] = newValue;
                break;
            case 'dropoffDate':
                rowData[field] = newValue;
                break;
            case 'pickupHour':
                rowData[field] = newValue;
                break;
            case 'dropoffHour':
                rowData[field] = newValue;
                break;
            default:
                if (newValue.trim().length > 0) rowData[field] = newValue;
                else event.preventDefault();

                break;
        }
        console.log(rowData)
        eurocarService.updateRent(e.rowData).then();
    };

    const cellEditor = (options) => {
        console.log(options)
        if (options.field === 'phoneNumber')
            return numberEditor(options);
        else if (options.field === 'pickupHour' || options.field === 'dropoffHour')
            return hourEditor(options);
        else if (options.field === 'pickupDate' || options.field === 'dropoffDate')
            return calendarEditor(options);
        else return textEditor(options);
    };

    const calendarEditor = (options) => {
        return <Calendar value={options.value}
                         onChange={(e) => options.editorCallback(e.target.value.toLocaleDateString("ro-RO"))}
                         dateFormat="dd.mm.yy"
                         onKeyDown={(e) => e.stopPropagation()}
        />;
    };

    const hourEditor = (options) => {
        return <Calendar timeOnly value={options.value}
                         onChange={(e) => {
                             let pickHourTemp = e.target.value.getHours() + "." + e.target.value.getMinutes()
                             options.editorCallback(pickHourTemp)
                         }}
                         dateFormat="dd.mm.yy"
                         onKeyDown={(e) => e.stopPropagation()}
        />;
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value}
                          onChange={(e) => options.editorCallback(e.target.value)}
                          onKeyDown={(e) => e.stopPropagation()}/>;
    };

    const numberEditor = (options) => {
        return <InputText keyfilter="int" value={options.value} onChange={(e) => options.editorCallback(e.target.value)}
                          onKeyDown={(e) => e.stopPropagation()}/>;
    };

    return (
        localStorage.getItem('token') != null ?
            <div className="h-screen">
                <AdminHeader/>
                <div className="card">
                    <DataTable editMode="cell" stripedRows paginator rows={7} value={rents}
                               tableStyle={{minWidth: '50rem'}}>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="firstname" header="Prenume"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="lastname" header="Nume"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="email" header="Email"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="phoneNumber" header="Telefon"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="pickupDate" header="Dată Preluare"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="dropoffDate" header="Dată Predare"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="pickupHour" header="Oră Preluare"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="dropoffHour" header="Oră Predare"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="pickupCity" header="Oraș preluare"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="dropOffCity" header="Oraș Predare"/>
                        <Column
                            editor={(options) => cellEditor(options)} onCellEditComplete={(e) => onCellEditComplete(e)}
                            sortable field="carId" header="Car ID"/>
                    </DataTable>
                </div>
            </div> :
            <NoAuthorization/>
    );
}

export default AdminTablePage;