import { baseUrl } from './const.js';

export const fetchEpisodes = function(page = 1, name = '') {
    const realUrl = `${baseUrl}/episode?page=${page}&name=${name}`;
    let result;
    try {
        result = fetch(realUrl).then(
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