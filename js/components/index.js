import MovieList from './movie-list/index.js';
import movieCard from './movie-card/index.js';
import movieService from './movie-service.js';

const input = document.querySelector('.search-input');
const movieList = document.querySelector('.movies');
const filters = document.querySelector('.filters');
const list= new MovieList();


input.addEventListener('input', e => {
    const searchText = e.target.value;
    if(!searchText){
        list.clearList(movieList);
        return;
    }
    movieService.getVideoByText(searchText)
        .then(data=> {
            list.init(data);
            list.renderMovies(data.results);

           list.drawToDom(movieList)
        })
});

    filters.addEventListener('click', (e) =>{
    e.preventDefault();
   const target=e.target;
   console.log(target.className);
   const dataAttr = target.className;
   if(!dataAttr){
       return;
   }

   list.sort(dataAttr);
    });

    movieList.addEventListener('click', e=>{
        const target = e.target;
        const link = target.closest('.movie-link');
        let id;
        e.preventDefault();

        if(!link){
            return;
        }

        id=link.getAttribute('href');
        movieService.getVideoById(id)
            .then(data=>{
                movieCard.renderMovie(data);
            });
    });