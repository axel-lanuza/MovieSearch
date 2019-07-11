import service from './service';
import MovieList from './components/movielist/index';
import movieCard from './components/movieCard/index';

const input = document.querySelector('.search-input');
const movieList = document.querySelector('.movies');
const list = new MovieList();
const filters = document.querySelectorAll('[name$="filter"]');
input.addEventListener('input', e => {
        const searchText = e.target.value;

        if (!searchText) {
            MovieList.clearList(movieList);
            return;
        }


        service.getMovieByText(searchText)
            .then(result => {
                list.renderMovies(result);
                list.toDOM(movieList);
            })


    }
);
filters.forEach((input) => input.addEventListener('click', (e) => {
        let filter = e.target.value;
        list.sort(filter);
    }
));

movieList.addEventListener('click', e => {
    e.preventDefault();
    const link = e.target.closest('.movie-link');
    const id = link.getAttribute('href');
    const type = link.dataset.type;
    if (!link) {
        return;
    }
    service.getMovieById(id, type)
        .then(result => {
            movieCard(result);
        })
});
