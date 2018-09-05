const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAllTitles = function (film) {
  const result = this.films.map(function (film) {
    return film.title;
  })
  return result;
}

Cinema.prototype.findFilmByTitle = function (title) {
  const result = this.films.filter(function (film) {
    return film.title === title;
  })
  return result[0];
}

module.exports = Cinema;
