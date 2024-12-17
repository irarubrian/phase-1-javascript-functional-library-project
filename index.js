
// index.js
// index.js

// myEach: Iterate over a collection (array or object) and execute a callback
const myEach = (collection, callback) => {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            callback(collection[key], key, collection);
        }
    }
    return collection;
};

// myMap: Create a new array by applying a function to each element of the collection
const myMap = (collection, callback) => {
    let result = [];
    myEach(collection, (value, key, collection) => {
        result.push(callback(value, key, collection));
    });
    return result;
};

// myReduce: Reduce a collection to a single value using a callback function
const myReduce = (collection, callback, initialValue) => {
    let accumulator = initialValue;
    let startIndex = 0;

    if (Array.isArray(collection)) {
        if (accumulator === undefined) {
            accumulator = collection[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        if (accumulator === undefined) {
            accumulator = collection[keys[0]];
            startIndex = 1;
        }

        for (let i = startIndex; i < keys.length; i++) {
            accumulator = callback(accumulator, collection[keys[i]], keys[i], collection);
        }
    }

    return accumulator;
};

// myFind: Return the first value in the collection that satisfies the callback condition
const myFind = (collection, callback) => {
    for (let key in collection) {
        if (callback(collection[key])) return collection[key];
    }
    return undefined;
};

// myFilter: Filter elements based on the callback function
const myFilter = (collection, callback) => {
    const result = [];
    for (let key in collection) {
        if (callback(collection[key])) result.push(collection[key]);
    }
    return result;
};

// mySize: Return the size of the collection (array length or object key count)
const mySize = (collection) => {
    if (Array.isArray(collection)) return collection.length;
    return Object.keys(collection).length;
};

// myFirst: Return the first element or first 'n' elements of a collection
const myFirst = (array, n = 1) => {
    return n === 1 ? array[0] : array.slice(0, n);
};

// myLast: Return the last element or last 'n' elements of a collection
const myLast = (array, n = 1) => {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
};

// myKeys: Retrieve all the keys of an object's own enumerable properties
const myKeys = (object) => {
    return Object.keys(object);
};

// myValues: Retrieve all the values of an object's own properties
const myValues = (object) => {
    return Object.values(object);
};

// Export all functions
module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
};




