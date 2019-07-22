const API_KEY = 'e2f733e22ca6685dae37cb82c4df5357';

export default {
    searchMovieUrl: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,
    searchTVShowUrl: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=`,
    baseMovieUrl: `https://api.themoviedb.org/3/movie/`,
    baseTVshowURL: `https://api.themoviedb.org/3/tv/`,
    api_keyPart: `?api_key=${API_KEY}`,
    imgSrc: 'https://image.tmdb.org/t/p/w300',
    noImgSrc: '../../img/poster.png',
    imgForCardSrc: 'https://image.tmdb.org/t/p/w780',
    noimgForCardSrc: '../../img/big_poster.png',
}
