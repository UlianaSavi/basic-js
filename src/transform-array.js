const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

// const arr = [ '--double-next', { foo: 'bar' } ];
const arr = [1, 2, 3, '--discard-next'];

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;
  let result = arr.slice();
  for (let i = 0; i < result.length; i++) {
      if (typeof result[i] === 'string') {
          if (result[i] === '--discard-next') {
            delete result[i];
            delete result[i + 1];
          }
          else if (result[i] === '--discard-prev') {
            delete result[i];
            delete result[i - 1];
          }
          else if (result[i] === '--double-next') {
              delete result[i];
              result.splice(i + 1, 0, result[i + 1]);
          } else if (result[i] === '--double-prev') {
              delete result[i];
              result.splice(i, 0, result[i - 1]);
          }
      }
  }
  return result.filter(el => el !== undefined);
}

transform(arr);

module.exports = {
  transform
};