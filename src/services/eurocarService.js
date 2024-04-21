import {service} from "./service";

export const eurocarService = {
    getPrice: (pickupDate, dropOffDate, pickHour, dropHour) =>
        service
            .get(`/price/${pickupDate}/${dropOffDate}/${pickHour}/${dropHour}`)
            .then(r => {
                return r.data
            }),
    rent: (rentObj) =>
        service
            .post(
                '/rent',
                rentObj
            )
            .then(r => {
                return r.data
            }),
    getRents: () =>
        service
            .get('/rents')
            .then(r => {
                return r.data
            })
};