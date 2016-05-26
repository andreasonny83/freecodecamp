/**
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 */
function destroyer(arr) {
  'use strict';

  for (var i in arguments) {
    if (!arguments.hasOwnProperty(i) || i === 0) {
      continue;
    }
  }

  return arr;
}

module.exports = destroyer;
