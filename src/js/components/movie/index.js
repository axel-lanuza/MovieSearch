import config from "../../config";

export default class Movie {
    constructor(data) {
        this.data = data;
    }

    generateHTML() {
        const readyData = this.mapData();
        return `
            <a href='${readyData.id}' data-type='${readyData.type}' class="movie-link">
            <div class="row data">
            <div class="col-md-4"><div class="poster"><img alt='${readyData.title}' src='${readyData.poster}'></div></div>
            <div class="col-md-8"><h2>${readyData.title}</h2>
            <div class="row additional-info">
            <div class="col-md-3">Released in ${readyData.date}</div>
            <div class="col-md-3">Origin: ${readyData.country}</div>
            <div class="col-md-3">Language: ${readyData.language}</div>
            <div class="col-md-3">Rating: ${readyData.vote}</div></div>
            <div class="overview">${readyData.description}</div></div></div>
            </a> `
    }

    mapData() {
        return {
            title: this.data.title || this.data.name || this.data.original_title || this.data.original_name,
            poster: this.getPoster(),
            date: this.getYear(),
            country: this.getCountry(),
            language: this.data.original_language,
            vote: this.data.vote_average,
            description: this.data.overview,
            id: this.data.id,
            type: this.data.contentType
        };
    }

    getPoster() {
        const url = this.data.backdrop_path || this.data.poster_path;
        if (url) {
            return config.imgSrc + url;
        } else {
            return config.noImgSrc;
        }
    }

    getYear() {
        const date = this.data.release_date || this.data.first_air_date;
        if (!date) {
            return '?'
        } else {
            return date.slice(0, 4);
        }
    }

    getCountry() {
        const countryCode = this.data.origin_country || this.data.original_language;
        let country;
        switch (countryCode) {
            case 'US':
                country = 'USA';
                break;
            case 'en':
                country = 'USA';
                break;
            case 'pt':
                country = 'Portugal';
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
                country = 'US';
        }
        return country;
    }
}