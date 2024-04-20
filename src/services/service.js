import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
}

const URL = "http://localhost:8080";
//const URL = "https://eurocargmn-6d6f50172cea.herokuapp.com";

export const service = {
    post: (url, obj, config) =>
        axios.post(`${URL}${url}`, JSON.stringify(obj), {
            ...config, headers
        }).then(response => {
            return response;
        }).catch(res => res.response),
    get: (url, obj) =>
        axios.get(`${URL}${url}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: obj
        }).then(response => {
            return response;
        }).catch(res => res.response),
    delete: (url, obj) =>
        axios.delete(`${URL}${url}`, {
            headers,
            data: obj
        }).then(response => {
            return response;
        }).catch(res => res.response),
}