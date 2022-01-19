//import movies from './data.js';

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

    let result = array.map(x => x);

    result = array.map(function(el) {
        return el.director;
    });

    result = result.filter(function(el, director) {
        return result.indexOf(el) == director;
    });

    return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

    let result = '';

    result = array.filter(function(movie) {
        if (movie.director == director) {
            return movie
        }
    });

    return result;
    //return (result.length > 0) ? result : `no movies for ${director}`;
}

// Exercise 3: Calculate the average of the films of a given director.

function moviesAverage(array) {

    if (array.length > 0) {
        let average = Math.round(((array.reduce(function(acum, value) { return acum + value; }) / array.length) * 100)) / 100;
        return average;
    } else {
        //console.log('no movies ')
        return 0;
    }
}

function moviesAverageOfDirector(array, director) {

    let result = '';

    result = array.filter(function(movie) {
        if (movie.director == director) {
            return movie;
        }
    }).map(function(movie) {
        return movie.score;
    });

    let average = moviesAverage(result);
    return average;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

    let result = array.map(x => x);

    result = result.sort(function(a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
    }).map(function(movie) {
        return movie.title;
    }).slice(0, 20);

    return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

    let result = array.map(x => x);

    result = result.sort(function(a, b) {
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        if (a.year == b.year) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
        }
    });

    return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

    let result = array.map(x => x);

    result = array.filter(function(movie) {
        if (movie.genre.includes(category) && (movie.score > 0)) {
            return movie
        }
    }).map(function(movie) {
        return movie.score;
    });

    let average = moviesAverage(result);

    return average;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
    let result = array.map(x => { return {...x } });

    result = result.map(function(movie) {

        let duration = movie.duration.split(" ");
        let hours = parseInt(duration[0].slice(0, -1)) * 60;
        let min = (duration[1]) ? parseInt(duration[1].slice(0, -3)) : 0;
        let total = hours + min;
        movie.duration = total;

        return movie;

    });
    return result;

}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

    let result = '';

    result = array.filter(function(movie) {
        if (movie.year == year) {
            return movie;
        }
    }).sort(function(a, b) {
        if (a.score > b.score) {
            return -1;
        }
        if (a.score < b.score) {
            return 1;
        }
    });

    let auxiliar = [];
    auxiliar.push(result[0]);
    return auxiliar;
    //return (result.length > 0) ? result[0] : `No movies for ${year}`;

}

//getAllDirectors(movies);
//getMoviesFromDirector(movies, 'Quentin Tarantino');
//moviesAverageOfDirector(movies, 'Quentin Tarantino');
//orderAlphabetically(movies);
//orderByYear(movies)
//moviesAverageByCategory(movies, 'Drama')
//hoursToMinutes(movies);
//bestFilmOfYear(movies, '2011');

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverage,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    };
}