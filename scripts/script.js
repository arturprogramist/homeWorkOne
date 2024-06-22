let numberOfFilms = +prompt("How many films have you watched?");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}
let name = prompt("name of your film");
let grade = +prompt("what is your grade about this film?")
let name1 = prompt("name of your film");
let grade1 = +prompt("what is your grade about this film?")

personalMovieDB.movies[name] = grade;
personalMovieDB.movies[name1] = grade1;


console.log(personalMovieDB);