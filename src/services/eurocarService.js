import {service} from "./service";

export const eurocarService = {
    getPrice: () =>
        service
            .get('/price')
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
                // return r.data
            })
};