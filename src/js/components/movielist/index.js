import {movie} from '../movie';

export default class MovieList {
    static clearList(selector) {
        selector.innerHTML = '';
    }

    toDOM(selector) {
        MovieList.clearList(selector);
        selector.appendChild(this.fragment);
    }

    renderMovies(data) {
        this.data = data;
        this.fragment = document.createDocumentFragment();
        this.data.forEach(data => {
            const article = document.createElement('article');
            article.classList.add('movie');
            article.innerHTML = movie(data);
            this.fragment.appendChild(article);
        })
    }

    sort(filter) {
        let sortData = [...this.data];
        if (filter === "max") {
            this.sortByRating(sortData, 'max')
        }
        if (filter === "min") {
            this.sortByRating(sortData, 'min')
        }
        if (filter === "new") {
            this.sortByDate(sortData, 'new')
        }
        if (filter === "old") {
            this.sortByDate(sortData, 'old')
        }
    }

    sortByRating(data, filter) {
        if (filter === 'max') {
            data.sort((a, b) => {
                if (a.vote_average < b.vote_average) {
                    return 1;
                } else return -1;
            });
        } else if (filter === 'min') {
            data.sort((a, b) => {
                if (a.vote_average > b.vote_average) {
                    return 1;
                } else return -1;
            });
        }

        this.renderMovies(data);
        this.toDOM(document.querySelector('.movies'));
    }

    sortByDate(data, filter) {
        const defaultDate = new Date(1700, 0);
        if (filter === 'new') {
            data.sort((a, b) => {
                if (new Date(a.release_date || a.first_air_date || defaultDate) < new Date(b.release_date || b.first_air_date || defaultDate)) {
                    return 1;
                } else return -1;
            })
        }
        if (filter === 'old') {
            data.sort((a, b) => {
                if (new Date(a.release_date || a.first_air_date || defaultDate) > new Date(b.release_date || b.first_air_date || defaultDate)) {
                    return 1;
                } else return -1;
            })
        }
        this.renderMovies(data);
        this.toDOM(document.querySelector('.movies'));
    }

}
