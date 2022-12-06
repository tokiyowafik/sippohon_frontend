import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/tempatPembuanganAkhir";

export function getAllTPA() {
    return http.get(apiEndPoint);
}

export function getTPA(id) {
    return http.get(`${apiEndPoint}/${id}`);
}

export function saveTPA(tpa) {
    if (tpa._id) {
        const data = {...tpa};
        delete data._id;
        return http.put(`${apiEndPoint}/${tpa._id}`, data, config.service);
    }

    return http.post(apiEndPoint, tpa, config.service);
}

export function deleteTPA(id) {
    return http.delete(`${apiEndPoint}/${id}`);
}