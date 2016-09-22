import { API_BASE_URL } from './constants';

export class APIService {
    static $inject = [
        '$http'
    ];

    constructor($http) {
        this.http = $http;
    }

    create(path, data) {
        return this.http.post(`${API_BASE_URL}${path}`, data)
            .then(response => response.data);
    }

    delete(path) {
        return this.http.delete(`${API_BASE_URL}${path}`);
    }

    fetch(path) {
        return this.http.get(`${API_BASE_URL}${path}`)
            .then(response => response.data);
    }

    update(path, data) {
        return this.http.put(`${API_BASE_URL}${path}`, data)
            .then(response => response.data);
    }
}