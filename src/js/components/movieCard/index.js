import Movie from '../movie'

const listWrapper = document.querySelector('.list-wrapper');
const movieWrapper = document.querySelector('.movie-wrapper');
const TVSHOW = 'tv';
const MOVIE = 'movie';

export default class MovieCard extends Movie {

    static closeCard() {
        movieWrapper.style.display = 'none';
        listWrapper.style.display = 'block'
    }

    generateHTML() {
        const readyData = this.mapData();
        let html;
        if (readyData.type === MOVIE) {
            html = `
            <!-- <div class="col-md-4"><div class="poster"><img src=''></div></div> -->
            <div class="row movie-data">
            <div class="col-md-4">
            <div class="card-poster" style="background: url(${readyData.poster}) center no-repeat; background-size: cover"></div></div>
            <div class="col-md-8"><h2>${readyData.title}</h2>
            <div class="additional-info"> 
            <div>Rating: ${readyData.vote}</div>
            <div>Genre: ${readyData.genres}</div>
            <div>Duration: ${readyData.duration} min</div>
            <div>Released on ${readyData.date}</div> 
            <div>Origin: ${readyData.country}</div>
            <div>Languages: ${readyData.language}</div>
            <div>Original title: ${readyData.originalTitle}</div>
            <div>Production companies: ${readyData.studios}</div>
            <div>Budget: $ ${readyData.budget}</div>
            <div>Revenue: $ ${readyData.revenue}</div>
            </div>
            <div class="overview">${readyData.description}</div>
            <div class="back-btn"> <a class="btn">Back to the list</a></div>
            </div></div>`;
        }
        if (readyData.type === TVSHOW) {
            html = `
            <!-- <div class="col-md-4"><div class="poster"><img src=''></div></div> -->
            <div class="row movie-data">
            <div class="col-md-4">
            <div class="card-poster" style="background: url(${readyData.poster}) center no-repeat; background-size: cover"></div></div>
            <div class="col-md-8"><h2>${readyData.title}</h2>
            <div class="additional-info">
            <div>Rating: ${readyData.vote}</div>
            <div>Genre: ${readyData.genres}</div>
            <div>Status: ${readyData.status}</div>
            <div>Seasons: ${readyData.seasonsNumber}</div>
            <div>Episodes: ${readyData.episodesNumber}</div>
            <div>Duration of an episode: ${readyData.duration} min</div>
            <div>First episode on: ${readyData.firstEpisodeDate}</div>
            <div>Last episode on: ${readyData.lastEpisodeDate}</div>
            <div>Homepage: <a href="${readyData.homepage}">${readyData.homepage}</a></div>
            <div>Origin: ${readyData.country}</div>
            <div>Languages: ${readyData.language}</div>
            <div>Original title: ${readyData.originalTitle}</div>
            <div>Production companies: ${readyData.studios}</div>
            </div>
            <div class="overview">${readyData.description}</div>
            <div class="back-btn"> <a class="btn">Back to the list</a></div>
             </div></div>`;
        }
        return html;
    }

    mapData() {
        if (this.data.contentType === MOVIE) {
            return {
                title: this.data.title || this.data.name || this.data.original_title || this.data.original_name,
                poster: this.getPoster(),
                date: this.data.release_date,
                country: this.getValueFromArray('production_countries'),
                originalTitle: this.data.original_title,
                language: this.getValueFromArray('spoken_languages'),
                studios: this.getValueFromArray('production_companies') || 'Unknown',
                genres: this.getValueFromArray('genres'),
                duration: this.data.runtime || '?',
                budget: this.data.budget,
                revenue: this.data.revenue,
                vote: this.data.vote_average,
                description: this.data.overview,
                id: this.data.id,
                type: this.data.contentType
            };
        }
        if (this.data.contentType === TVSHOW) {
            return {
                title: this.data.title || this.data.name || this.data.original_title || this.data.original_name,
                poster: this.getPoster(),
                firstEpisodeDate: this.data.first_air_date,
                lastEpisodeDate: this.data.last_air_date,
                country: this.data.origin_country.join(', '),
                originalTitle: this.data.original_name || this.data.original_title,
                language: this.data.languages.join(', '),
                studios: this.getValueFromArray('production_companies') || 'Unknown',
                genres: this.getValueFromArray('genres'),
                duration: this.data.episode_run_time[0] || '?',
                status: this.data.status,
                homepage: this.data.homepage,
                episodesNumber: this.data.number_of_episodes,
                seasonsNumber: this.data.number_of_seasons,
                vote: this.data.vote_average,
                description: this.data.overview,
                id: this.data.id,
                type: this.data.contentType
            };
        }
    }

    getValueFromArray(array) {
        let targetArray = this.data[array];
        let values = [];
        targetArray.forEach((obj) => values.push(obj.name));
        return values.join(', ');
    }


    renderMovieCard() {
        listWrapper.style.display = 'none';
        const card = document.createElement('article');
        card.classList.add('movie-card');
        card.innerHTML = this.generateHTML();
        movieWrapper.innerHTML = '';
        movieWrapper.style.display = 'block';
        movieWrapper.appendChild(card);
        const backBtn = document.querySelector('.back-btn');
        backBtn.addEventListener('click', MovieCard.closeCard);
    }


}