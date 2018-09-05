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
Cinema.prototype.getFilmsByGenre = function (genre) {
  const result = this.films.filter(function (film) {
    return film.genre === genre;
  })
  return result;
}

Cinema.prototype.checkIfHasFilmByYear = function (year) {
  const result = this.films.some(function (film) {
    return film.year === year;
  })
  return result;
}

Cinema.prototype.checkLengthOver = function (duration) {
  const result = this.films.every(function (film) {
    return film.length > duration;
  })
  return result;
}

Cinema.prototype.calculateDuration = function () {
  const result = this.films.reduce(function (total, film) {
    return total + film.length;
  }, 0);
  return result;
}

Cinema.prototype.filmsByProperty = function (propertyName, value) {
  const result = this.films.filter(function (film) {
    return film[propertyName] === value;
  })
  return result;
}
module.exports = Cinema;
