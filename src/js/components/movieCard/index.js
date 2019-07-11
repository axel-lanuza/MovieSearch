import config from '../../config';

const listWrapper = document.querySelector('.list-wrapper');
const movieWrapper = document.querySelector('.movie-wrapper');
const TVSHOW = 'tv';
const MOVIE = 'movie';


export default function movieCard(data) {
    // console.log(data);
    const readyData = mapData(data);
    let html;
    if(readyData.type ===MOVIE ) {
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
    <div>Poduction companies: ${readyData.studios}</div>
    <div>Budget: $ ${readyData.budget}</div>
    <div>Revenue: $ ${readyData.revenue}</div>
    </div>
    <div class="overview">${readyData.description}</div>
    <div class="back-btn"> <a class="btn">Back to the list</a></div>
    </div></div>
    
    `;
    }
    if(readyData.type === TVSHOW ) {
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
    <div>First episod on: ${readyData.firstEpisodeDate}</div>
    <div>Last episod on: ${readyData.lastEpisodeDate}</div>
    <div>Homepage: <a href="${readyData.homepage}">${readyData.homepage}</a></div>
    <div>Origin: ${readyData.country}</div>
    <div>Languages: ${readyData.language}</div>
    <div>Original title: ${readyData.originalTitle}</div>
    <div>Poduction companies: ${readyData.studios}</div>
    </div>
    <div class="overview">${readyData.description}</div>
    <div class="back-btn"> <a class="btn">Back to the list</a></div>
     </div></div>`;
    }


    render(html);
}

function mapData(data) {
    let getPoster = () => {
        const url = data.backdrop_path || data.poster_path;
        if (url) {
            return config.imgForCardSrc + url;
        } else {
            return config.noImgSrc;
        }

    };

    function  getValueFromArray(array){
        console.log(data);
        let targetArray = data[array];
        let values = [];
        targetArray.forEach((obj) => values.push(obj.name));
        return values.join(', ');
    }

    if(data.contentType === MOVIE ){
        return {
            title: data.title || data.name || data.original_title || data.original_name,
            poster: getPoster(),
            date: data.release_date,
            country: getValueFromArray('production_countries'),
            originalTitle: data.original_title,
            language: getValueFromArray('spoken_languages'),
            studios: getValueFromArray('production_companies'),
            genres: getValueFromArray('genres'),
            duration: data.runtime || '?',
            budget: data.budget,
            revenue: data.revenue,
            vote: data.vote_average,
            description: data.overview,
            id: data.id,
            type: data.contentType
        };
    }


    if(data.contentType ===TVSHOW){
        return {
            title: data.title || data.name || data.original_title || data.original_name,
            poster: getPoster(),
            firstEpisodeDate: data.first_air_date,
            lastEpisodeDate: data.last_air_date,
            country: data.origin_country.join(', '),
            originalTitle: data.original_name || data.original_title,
            language: data.languages.join(', '),
            studios: getValueFromArray('production_companies'),
            genres: getValueFromArray('genres'),
            duration: data.episode_run_time[0] || '?',
            status: data.status,
            homepage: data.homepage,
            episodesNumber: data.number_of_episodes,
            seasonsNumber: data.number_of_seasons,
            vote: data.vote_average,
            description: data.overview,
            id: data.id,
            type: data.contentType
        };
    }





}

function render(html) {
    const card = document.createElement('article');
    card.innerHTML = html;
    card.classList.add('movie-card');
    listWrapper.style.display = 'none';
    movieWrapper.innerHTML = '';
    movieWrapper.style.display = 'block';
    movieWrapper.appendChild(card);
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', closeCard);

}

function closeCard() {
    movieWrapper.style.display = 'none';
    listWrapper.style.display = 'block'
}
