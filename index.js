'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * 
 * 
 * identity: Returns the value unchanged
 * 
 * 
 * @param {value} value: The value to be returned from this function
 * 
 * @returns {value} : The value unchaged 
 */

function identity (value){
    return value;
}
module.exports.identity = identity;


/**
 * 
 * 
 * typeOf: Returns the type of value as a string
 * 
 * 
 * @param {value} value: The value to be returned from this function as a string
 * 
 * @returns {value} : The value in string form
 */

function typeOf (value){
if(typeof value == "string"){
        return "string";
    }
    else if(Array.isArray(value)){
        return "array";
    }   
    else if(value === null){
        return "null";
    }
    else if((value instanceof Date)){
        return "date";
   
    }
    else if(typeof value == "object"){
        return "object";
    }
    else if(typeof value == "undefined"){
        return "undefined";
    }
    else if(typeof value == "number"){
        return "number";
    }
    else if(typeof value == "boolean"){
        return "boolean";
    }
    else if(typeof value == "function"){
        return "function";
    }
}
module.exports.typeOf = typeOf;


/**
 * 
 * 
 * first: Returns [], 'a', 'a','b' 
 * 
 * 
 * @param {is not an array} value returned: [] from this function
 * @param {number isNaN, undefined or < 1} : retrun first element in array, return first number item
 * @returns {array} : The value from the array
 */

function first (array, number) {
    // console.log(number);
if (!Array.isArray(array) || number < 0) {
return [];
}
if (isNaN(number) || number === undefined || number < 1) {
return array[0];
}
else {
    return array.slice(0,number);
}
}
module.exports.first = first;



/**
 * 
 * 
 * last: return array of the elements up to a given index
 * 
 * 
 * @param {array} <array> is not an array, return []
 * @param {numnber} <number> is not given or not a number, return just the last element in <array>.
 * @returns {array} : [], 'c', 'c', ['b','c'] 
 */
function last (array, number) {
    // console.log(array.length - number);
if (!Array.isArray(array) || number < 0) {
return [];
}
if (isNaN(number) || number === undefined || number < 1) {
return array[2];
}
if (number > array.length){
    return array;
}
else{
    return array.slice(array.length - number);
}
}
module.exports.last = last;


/**
 * 
 * 
 * indexOf: iterate over <array> to check for <value>
 * 
 * 
 * @param {array} Return the index of <array> that is the first occurrance of <value>
 * @param {value} Return -1 if <value> is not in <array>
 * @returns {returnValue} : 2, -1
 */
 
function indexOf (array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) { 
                let returnValue = i++;
            return returnValue;
        } 
    }
    return -1;
}
module.exports.indexOf = indexOf

;
/**
 * 
 * 
 * contains: iterate over <array> to check for <value>
 * 
 * 
 * @param {array} Return true if <array> contains <value>
 * @param {value} Return false if <value> is not in <array>
 * @returns {array.includes(value)} : boolean returns true 
 */
 
 function contains (array, value) {
        return (array.includes(value)  ? true : false);
}
module.exports.contains = contains;



/**
 * 
 * 
 * unique: iterate over <array> to check for duplicated numbers that need to be removed
 * 
 * 
 * @param {array} Return a new array containing <array> elements without duplicates.(use indexOf)
 *
 * @returns {array.filter((a,b) : removed duplicates [1,2,4,5,6]
 */
 
 function unique (array) {
   return array.filter((a, b) => array.indexOf(a) === b);

}
module.exports.unique = unique;


/**
 * 
 * 
 * filter: iterate over <array> to check for numbers that need to be removed, check if it returns true(func is a bool)
 * 
 * 
 * @param {array} Return a new array containing <array> elements % of 2.(use each)
 * @param {func} the function to be applied to each value
 * @returns {newArr} : removed odd numbers (or %2) = [2,4]
 */
 
  function filter (array, func){
    // create filter array
    // loop through given <array>
 let newArr = [];
    each(array, function(ele, i, array) {
// if func called over each ele in array with the arguments ele, i in array returns true
if(func(ele, i, array)){
   newArr.push(ele);
}
// then push those eles into newArr

    });
// return newArr
    return newArr;
}
module.exports.filter = filter;


/**
 * 
 * 
 * reject: iterate over <array> to check for numbers that need to be removed, check if it returns !true(func is a bool)
 * 
 * 
 * @param {array} Return a new array containing <array> elements !% of 2.(use filter)
 * @param {func} the function to be applied to each value
 * @returns {newArr} : inverse of filter, odd numbers (or !%2) are put returned  [1,3,5]
 */
 
function reject (array, func){
    // create filter array
    // loop through given <array>
 let newArr = [];
    filter(array, function(ele, i, array) {
// if func called over each ele in array with the arguments ele, i in array returns true
if(!func(ele, i, array)){
   newArr.push(ele);
}
// then push those eles into newArr

    });
// return newArr
    return newArr;
}
module.exports.reject = reject;

/**
 * 
 * 
 * partition: iterate over <array> to check for truthy and falsy (did this in filter and _.reverse) then return array of arrays [[]]
 * 
 * 
 * @param {array} Return a new array containing <array> elements % of 2.(use filter), return a new array containing <array> elements !% of 2.(use reject)
 * @param {func} Return both arrays into one 
 * @returns {[filter(array, func), reject(array, func)];} : [1,2,3,4,5] =  _. filter[[2,4], _.reverse[1,3,5]] inverse of filter, odd numbers (or !%2) are put returned  [1,3,5]
 */
 function partition(array, func){
    // let newArr = [];
    // let newNew = [];
    // _.filter(array, function(ele, key, array){
    // if(func(ele, key, array)){
    //     newArr.push(array);
    // });
    // _.reject(!array, function(ele, key, array){
    // });
    // }else if { 
    //     if(fun(ele,key,array)){
    //     newNew.push(array);
        
   
    // return [newArr, newNew];
 return [filter(array, func), reject(array, func)];
    
//     var eles = [];
//     for (var i=0;i<newArr.length; i++)
//     {
//         if(newArr[i] == 'ele')
//     {
//         eles.push(newArr[i]);
// }

}
module.exports.partition = partition;

/**
 * 
 * 
 * map: iterate over <collection> call function for each element(thing)
 * 
 * 
 * @param {collection} if <collection> is an array: the element, it's index, <collection>
 * @param {func} apply to value in <collection> if <collection> is an object: the value, it's key, <collection>
 * @returns {newArr} :  [2,4,6,8]
 */
 
 function map (collection, func) {
 let newArr = [];
    each(collection, function(thing, i, array) {
      newArr.push(func(thing, i, array));  
    });
    return newArr;
}
module.exports.map = map;
/**
 * 
 * 
 * pluck: iterate over <array> to check for 'name' value in property
 * 
 * 
 * @param {array} Return am array containing <property> values for every element(item) in <array>
 * @param {property} Has the value of 'name'
 * @returns {names} : ["one", "two"]
 */
 
function pluck (array, property){
    let names = array.map(function(item, index, array){
        return item['name'];
    });

    return names;
}
module.exports.pluck = pluck;

/**
 * 
 * 
 * every: {collection} Return true or false(use identity)
 * 
 * @param {collection} {array or object} array: current element, it's index, <collection> an object:current value, current key, <collection>
 * @param {function} {boolean} usesed to call with every element
 * @returns {false or true} : depending if the <function> (func) boolean returns true (collection % 2) else false
 */
 
function every (collection, func) {
    var check = func || identity;
    for (var i = 0; i < collection.length; i++){
        if (! check(collection[i])) {
            return false;
        }
  }
  return true;
}
module.exports.every = every;

/**
 * 
 * 
 * some: {collection} Return true or false(use each)
 * 
 * 
 * @param collection {array, or object} array: current element, it's index, <collection> an object:current value, current key, <collection>
 * @param {func} a boolean used to rerurn true 
 * @returns {result} : true when one element(e) is true
 */
 
 function some (collection, func){
    let result = false;
    each(collection, function(e,i,collection){
        if(typeof func !== "function"){
            if (e){
            result = true;
            }
        }
        else if(func(e, i, collection)){
            result = true;
        }
    });
    return result;

}
module.exports.some = some;

/**
 * 
 * 
 * reduce: iterate over <array> to get the sum 
 * 
 * 
 * @param {array} Return a new array containing <array> elements without duplicates.(use indexOf)
 * @param  {callBackFunction}Use the return value of <function> as the "previous result" the then for the first iteration use <seed> as the 'previous result'
 * @param {initialValue}If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
 * @returns {result} : adds the sum of [1,2,3] to 6
 */
 
function reduce (array, callBackFunction, initialValue) {
    //chek if initialValue is defined
    if (initialValue !== undefined) {
        var result = initialValue;
        each(array, function(element, index, array) {
            result = callBackFunction(result, element, index, array);
        });
        return result;
        }
        else {
            result = array[0];
            each(array, function(element, index, arrays) {
                if (index !== 0) {
                    result = callBackFunction(result, element, index, array);
                }
            });
            return result;
        }
}
module.exports.reduce = reduce;


/**
 * 
 * 
 * extend: iterate over <object> to gather properties
 * 
 * @param {...obj} Return <object> of all properties passed in
 * @returns {object} : returns all properties from <object>
 */
 
function extend(...obj) {
    var newObject = {};
    return Object.assign(...obj);

}
module.exports.extend = extend;


