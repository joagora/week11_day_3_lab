const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAllTitles = function (film) {
  const result = this.films.map(function (film) {
    return film.title;
  })
  return result;
}

module.exports = Cinema;
