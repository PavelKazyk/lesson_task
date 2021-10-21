// 'use strict';

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++){
// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколлько оцените его?', '');

//     if (a != '' && b != '' &&  a != null && b != null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }

// }

// if (personalMovieDB.count < 10) {
//     console.log('Вы посмотрели мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы посмотрели достаточно фильмов');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// }

// console.log(personalMovieDB);



'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');   
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let i = 0;
while (i <=1) {
const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколлько оцените его?', '');

    if (a != '' && b != '' &&  a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        
    }
    i++;

}
}

// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Вы посмотрели мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы посмотрели достаточно фильмов');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    }
}

// detectPersonalLevel();




function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);

function writeYourGanres (){
    for (let i=1; i<=3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i -1] = genre;
    }
}

writeYourGanres();
