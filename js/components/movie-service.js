import config from './config.js';

function getVideoByText(text){
    if(!text){
        return
    }

    return fetch(config.searchMovieUrl + text)
        .then(r=>r.json());
}

function getVideoById(id) {
    const url=`${config.baseMovieUrl}${config.queryMovieById}${id}${config.apiKey}`;
    return fetch(url)
        .then(r=>r.json());
}
export default {
    getVideoByText,
    getVideoById
}