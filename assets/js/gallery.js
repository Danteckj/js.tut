const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const answer = prompt('Один из просмотренных Фильмов', ''),
    answer2 = prompt('на сколько цените его?', ''),
    answerA = prompt('Один из просмотренных Фильмов', ''),
    answerA2 = prompt('на сколько цените его?', '');


personalMovieDB.movies = {
    answer: answer2,
    answerA: answerA2,
}

console.log(personalMovieDB);