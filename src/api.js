import { baseUrl } from './const.js';
import axios from 'axios';

export const fetchEpisodes = function(page = 1, name = '') {
    const url = `${baseUrl}/episode?page=${page}&name=${name}`;
    return axios.get(url).then(resp => resp.data);
}

export const fetchEpisode = function(id = 1) {
    const url = `${baseUrl}/episode/${id}`;
    return axios.get(url).then(resp => resp.data);
}

export const fetchCharacters = function(list = []) {
    const url = `${baseUrl}/character/${list}`;
    return axios.get(url).then(resp => resp.data);
}

export const fetchComments = function(id) {
    const url = `${baseUrl}/episode/${id}/comments`;
    return axios.get(url).then(resp => resp.data);
}

export const addComment = function(id, comment) {
    const url = `${baseUrl}/episode/${id}/comments`;
    return axios.post(url, comment);
}