import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
}

export const service = {
    post: (url, obj, config) =>
        axios.post(`http://localhost:8080${url}`, JSON.stringify(obj), {
            ...config, headers
        }).then(response => {
            return response;
        }).catch(res => res.response),
    get: (url, obj) =>
        axios.get(`http://localhost:8080${url}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: obj
        }).then(response => {
            return response;
        }).catch(res => res.response),
    delete: (url, obj) =>
        axios.delete(`http://localhost:8080/${url}`, {
            headers,
            data: obj
        }).then(response => {
            return response;
        }).catch(res => res.response),
}