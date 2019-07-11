import config from '../../config';

function movie(data) {
    const readyData = mapData(data);
    return `
    <a href='${readyData.id}' data-type='${readyData.type}' class="movie-link">
    <div class="row data">
    <!-- <div class="col-md-4"><div class="poster"><img src=''></div></div> -->
    <div class="col-md-4">
    <div class="poster" style="background: url(${readyData.poster}) center no-repeat; background-size: cover"></div></div>
    <div class="col-md-8"><h2>${readyData.title}</h2>
    <div class="row additional-info">
    <div class="col-md-3">Released in ${readyData.date}</div>
    <!-- <div>{readyData.genre}</div>-->
    <div class="col-md-3">Origin: ${readyData.country}</div>
    <div class="col-md-3">Language: ${readyData.language}</div>
    <div class="col-md-3">Rating: ${readyData.vote}</div></div>
    <div class="overview">${readyData.description}</div></div></div>
    </a>`;
}

function mapData(data) {
    let getPoster = () => {
        const url = data.backdrop_path || data.poster_path;
        if (url) {
            return config.imgSrc + url;
        } else {
            return config.noImgSrc;
        }

    };

    let getYear = () => {
        const date = data.release_date || data.first_air_date;
        if (!date) {
            return '?'
        } else {
            return date.slice(0, 4);
        }
    };

    let getCountry = () => {
        const countryCode = data.origin_country || data.original_language;
        let country;
        switch (countryCode) {
            case 'US':
                country = 'USA';
                break;
            case 'en':
                country = 'USA';
                break;
            case 'it':
                country = 'Italy';
                break;
            case 'ru':
                country = 'Russia';
                break;
            case 'sk':
                country = 'Slovakia';
                break;
            case 'he':
                country = 'Israel';
                break;
            case 'pl':
                country = 'Poland';
                break;
            case 'hi':
                country = 'India';
                break;
            case 'fr':
                country = 'France';
                break;
            case 'ko':
                country = 'Korea';
                break;
            case 'ja':
                country = 'Japan';
                break;
            case 'es':
                country = 'Spain';
                break;
            case 'tr':
                country = 'Turkey';
                break;
            case 'id':
                country = 'Indonesia';
                break;
            case 'cn':
            case 'zh':
                country = 'China';
                break;
            default:
                country = 'USA';
        }
        return country;
    };

    return {
        title: data.title || data.name || data.original_title || data.original_name,
        poster: getPoster(),
        date: getYear(),
        country: getCountry(),
        language: data.original_language,
        vote: data.vote_average,
        description: data.overview,
        id: data.id,
        type: data.contentType
    };
}

export {
    movie,
    mapData
}
