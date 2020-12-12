//module.exports = function fetchMovies () {};

import {fetchWithTimeout} from "./services";

const movies = require("./data/movies.json")
//const services = require('./services')
export function fetchMovies() {
    const resolveFunction = () => movies
    return fetchWithTimeout(1000).then(resolveFunction)
}

let moviePromise = fetchMovies()
moviePromise.then((results) => {console.log(results)})
