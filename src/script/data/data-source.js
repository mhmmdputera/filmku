import films from './film.js';

class DataSource {
  static searchFilm(keyword) {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4bf5d29447283c4962b17e00e7089b9f&language=en-US&page=1`)
      .then(response => {
       return response.json();
       })
      .then(responseJson => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      
        
       });

 /*   return new Promise((resolve, reject) => {
     const filteredFilms = films.filter(film => film.name.toUpperCase().includes(keyword.toUpperCase()));
  

  if (filteredFilms.length) {
    resolve(filteredFilms);
  } else {
    reject(`${keyword}  is not found`);
  }
 }); */
 } 
};

export default DataSource;