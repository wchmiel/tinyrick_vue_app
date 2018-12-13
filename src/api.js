import { baseUrl } from './const.js';
import axios from 'axios';

export const fetchEpisodes = function(page = 1, name = '') {
    const realUrl = `${baseUrl}/episode?page=${page}&name=${name}`;
    return fetchData(realUrl);
    // let result;
    // try {
    //     result = fetch(realUrl).then(
    //         resp => {
    //             if (resp.ok) {
    //                 return resp.json()
    //             }

    //             throw new Error('sdfsdfsdf');
    //         }
    //     ).catch(error => {
    //         console.log("Błąd: żądany adres nie istnieje");
    //         if (error.status === 404) {
    //             console.log("Błąd: żądany adres nie istnieje");
    //         }
    //     });
    // } catch(e) {
    //     console.log(e);
    // }

    // return result;
}

export const fetchEpisode = function(id = 1) {
    const realUrl = `${baseUrl}/episode/${id}`;
    return fetchData(realUrl);
}

export const fetchCharacters = function(list = []) {
    const realUrl = `${baseUrl}/character/${list}`;
    return fetchData(realUrl);
}

export const fetchComments = function(id) {
    const realUrl = `${baseUrl}/episode/${id}/comments`;
    return fetchData(realUrl);
}

export const addComment = function(id, comment) {
    const realUrl = `${baseUrl}/episode/${id}/comments`;
    return addData(realUrl, comment);
}

const fetchData = function(url) {
    let result;
    try {
        result = fetch(url).then(
            resp => {
                if (resp.ok) {
                    return resp.json()
                }

                throw new Error('sdfsdfsdf');
            }
        ).catch(error => {
            console.log("Błąd: żądany adres nie istnieje");
            if (error.status === 404) {
                console.log("Błąd: żądany adres nie istnieje");
            }
        });
    } catch(e) {
        console.log(e);
    }

    return result;
}

const addData = function(url, data) {
    return axios.post(url, data)
      .then(function (response) {
        //console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}