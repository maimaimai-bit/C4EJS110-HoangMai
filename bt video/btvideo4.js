//1
let movies = {
    title: 'The Dark Night Rises',
    year: 2012,
    ratings: 8.4
};
//2
console.log(movies.title);
console.log(movies.year);
console.log(movies['ratings']);
console.log(movies.director); //return undefined
let askUser = prompt ('What do you want to know about this movie?');
let x = movies[`${askUser}`];
if (x==null || x==undefined) {
    alert (`Sorry, ${askUser} does not exist in our database`);
} else {
    alert (x);
}
//3+4
movies.ratings = 8.7;
movies.ratings+=0.5;
console.log(movies.ratings);
let askProp = prompt ('What do you want to update?');
let x = movies[askProp];
if (x==null || x==undefined) {
    alert (`${askProp} does not exist in our data, we will add new`);
    let askNewVal = prompt ('Enter the new data');
    movies[askProp] = askNewVal;
} else {
    let askVal = prompt ('What is the update?');
    movies[askProp] = askVal;
} console.log(movies);
//5
let movies = [
    {
        title: 'Hulk',
        year: 2014,
        ratings: 7.6
    },
    {
        title: 'Thor',
        year: 2009,
        ratings: 5.9
    },
    {
        title: 'Iron Man',
        year: 2019,
        ratings: 7.3
    }
];
console.log(movies[0]);
console.log(movies[2].title);
for (let i=0; i <movies.length; i++) {
    console.log(movies[i]);
    console.log('-------------------');
} 
movies[2].ratings+=0.7;
console.log(movies[2].ratings);
//6
let movie = {
    title: 'Avengers',
    year: 2016,
    ratings: 7.3,
    characters: ['Iron Man', 'Thor', 'Black Widow']
}; 
console.log(movie.title);
console.log(movie.year);
console.log(movie.ratings);
movie.characters.push('Ant Man');
console.log(...movie.characters);
//7
let movies = [
    {
        title: 'Avengers',
        year: 2016,
        ratings: 7.3,
        characters: ['Iron Man', 'Thor', 'Black Widow']
    },
    {
        title: 'Forrest Gump',
        year: 1996,
        ratings: 8.8,
        characters: ['Forrest', 'Jenny', 'Dan']
    },
    {
        title: 'Dead Poets Society',
        year: 1992,
        ratings: 8.6,
        characters: ['Keatings', 'Dylan']
    }
];
for (let i=0; i<movies.length; i++) {
    console.log(movies[i].title);
    console.log(`year: ${movies[i].year}`);
    console.log(`ratings: ${movies[i].ratings}`);
    console.log('characters:', ...movies[i].characters);
    console.log('-------------------');
}



