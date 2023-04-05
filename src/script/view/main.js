import '../component/film-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const filmListElement = document.querySelector('film-List');

  const onButtonSearchClicked = () => {
    DataSource.searchFilm(searchElement.value)
    .then(renderResult)
    .catch(fallbackResult);
  };

  const renderResult = results => {
    filmListElement.films = results;
  };

  const fallbackResult = message => {
    filmListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;


