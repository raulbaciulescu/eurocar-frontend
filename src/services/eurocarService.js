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
            }),
    updateRent: (rent) =>
        service
            .put(
                '/rents',
                rent
            )
            .then(r => {
                return r.data
            }),
    login: (loginRequest) =>
        service
            .post(
                '/auth/login',
                loginRequest
            )
            .then(r => {
                return r.data
            }),
    register: (registerRequest) =>
        service
            .post(
                '/auth/register',
                registerRequest
            )
            .then(r => {
                return r.data
            }),
};