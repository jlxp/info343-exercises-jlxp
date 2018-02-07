//@ts-check
"use strict";

/**
 * @typedef NameRecord
 * @property {string} name
 * @property {string} sex
 * @property {number} count
 */


/**
 * Returns all records from nameRecordsArray where the 
 * `.name` property starts with the value of the `name` 
 * parameter. Since we're using ES6 features, feel free 
 * to use the built-in `.startsWith()` method on strings!
 * @param {NameRecord[]} nameRecordsArray
 * @param {string} name
 * @returns {NameRecord[]}
 */
export function getRecordsWithNamePrefix(nameRecordsArray, name) {
    //TODO: implement this according to the comments above.
    //HINT: use .filter() and pass a lambda function to it
    //DO NOT declare another function to do this: use a lambda
    //so that you can practice using them
    //https://drstearns.github.io/tutorials/es6/#seclambdafunctions
    return nameRecordsArray
        .filter(r => r.name.startsWith(name));
}

/**
 * Returns the just the name from the record that has the
 * largest `.count` property.
 * @param {NameRecord[]} nameRecordsArray 
 * @returns {string}
 */
export function getNameWithMaxCount(nameRecordsArray) {
    //TODO: implement according to the comments above
    //HINT: use .reduce() with a lambda function that
    //uses the ternary operator to do all of this in a
    //very compact way
    //DO NOT declare another function to do this: use a lambda
    //so that you can practice using them
    //https://drstearns.github.io/tutorials/javascript/#secternaryconditionoperator
    return nameRecordsArray
        .reduce((max, curr) => max.count < curr.count ? curr : max, nameRecordsArray[0]).name;
}

/**
 * Returns an array of strings containing the most popular
 * baby names from `nameRecordsArray` given a particular `sex`
 * to filter by, and a particular maximum number of results
 * to return. Array should be ordered by the `.count` property
 * descending. For example, if `sex` is set to `F` and `max`
 * is set to 10, you should return the 10 female baby names
 * from the `nameRecordsArray` with the largest `.count` values,
 * ordered by count descending.
 * @param {NameRecord[]} nameRecordsArray 
 * @param {string} sex
 * @param {number} max 
 * @returns {string[]}
 */
export function getMostPopularNames(nameRecordsArray, sex, max) {
    //TODO: implement this according to the comments above.
    //HINT: chain together .filter(), .sort(), .slice(), and
    //.map() and use lambdas with each to create a very compact
    //and clear implementation
    //DO NOT declare additional functions to do this: use lambdas
    //so that you can practice using them
    return nameRecordsArray
        .filter(r => r.sex === sex)
        .sort((a, b) => b.count - a.count)
        .slice(0, max)
        .map(baby => baby.name);
}

