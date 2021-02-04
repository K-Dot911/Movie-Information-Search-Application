import config from '../config.js';

export default function movie(data) {
    const mappingData = mapData(data);
    const html = `
        <a href='${data.id}' class="movie-link">
        <h2 class="movie-title">${mappingData.title}</h2>
        <date class="date">${mappingData.date}</date>
        <div class="country">${mappingData.country}</div>
        <div class="picture"><img src='${mappingData.imgSrc}'</div>
        <div class="language">${mappingData.language}</div>
        <div class="overview">${mappingData.overview}</div>
        <div class="popularity">${mappingData.popularity}</div>
        </a>
    `;
    return(html);

}

function mapData(data) {
    return {
        title: data.title || data.original_name || 'Unknown',
        date:data.release_date ||  data.first_air_date || 'Unknown',
        country: data.origin_country || 'Unknown',
        imgSrc: getPictureUrl(),
        language:  data.original_language || 'Unknown',
        overview: data.overview || 'Unknown',
        popularity: data.popularity || 'Unknown',
        id: data.id || Date.now(),
    };

    function getPictureUrl() {
        const url = data.backdrop_path || data.poster_path;
        if(url) {
            return config.imageSrc+url;
        }else {
            return config.noImageSrc;
        }
    }
}

