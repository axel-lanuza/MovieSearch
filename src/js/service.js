import config from './config';

const MOVIE = 'movie';
const TVSHOW = 'tv';

function getMovieByText(text) {
    if (!text) {
        return;
    }

    // Search in movies and TVshows
    let resultsMovies;
    let resultsShows;
    let results;
    return fetch(config.searchMovieUrl + text)
        .then(result => result.json())
        //Add the results of the first query to the array and return a new promise
        .then(result => {
            resultsMovies = [...result.results];
            //add type of content (necessary for search by id)
            resultsMovies.forEach((object) => object.contentType = MOVIE);
            return fetch(config.searchTVShowUrl + text);
        })
        .then(result => result.json())
        .then(result => {
            resultsShows = [...result.results];
            //add type of content (necessary for search by id)
            resultsShows.forEach((object) => object.contentType = TVSHOW)
        })
        //Merge the results of 2 requests
        .then(() => results = [...resultsMovies, ...resultsShows])
}

function getMovieById(id, type) {
    const MovieIdUrl = `${config.baseMovieUrl}${id}${config.api_keyPart}`;
    const TVshowIdUrl = `${config.baseTVshowURL}${id}${config.api_keyPart}`;
    let MovieObj;
    let TVshowObj;
    if (!id) {
        return;
    }

    //Check the type of the content (content of different types might have the same id)
    if (type === MOVIE) {
        return fetch(MovieIdUrl)
            .then(result => result.json())
            .then (result => {
                MovieObj = {...result};
                MovieObj.contentType=MOVIE;
                return MovieObj;
            })
    }
    if (type === TVSHOW) {
        return fetch(TVshowIdUrl)
            .then(result => result.json())
            .then (result => {
                TVshowObj = {...result};
                TVshowObj.contentType=TVSHOW;
                return TVshowObj;
            })


    }


}

export default {
    getMovieByText,
    getMovieById
}
