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
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  var arr2 = arr.slice(0);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === '--discard-next' && arr2[i] !== arr2.length - 1) {
      arr2.splice(i, 2);
    }
    if (arr2[i] === '--discard-prev' && arr2[i] !== arr2[0]) {
      arr2.splice(i - 1, 2);
    }
    if (arr2[i] === '--double-next' && arr2[i] !== arr2.length - 1) {
      arr2[i] = arr2[i + 1];
    }
    if (arr2[i] === '--double-prev' && arr2[i] !== arr2[0]) {
      arr2[i] = arr2[i - 1];
    }

    if (arr2[i] === '--discard-next' && arr2[i] === arr2.length - 1) {
      arr2.splice(i, 1);
    }
    if (arr2[i] === '--discard-prev' && arr2[i] === arr2[0]) {
      arr2.splice(i, 1);
    }
    if (arr2[i] === '--double-next' && arr2[i] === arr2.length - 1) {
      arr2.splice(i, 1);
    }
    if (arr2[i] === '--double-prev' && arr2[i] === arr2[0]) {
      arr2.splice(i, 1);
    }
    if (arr2[i] === undefined) {
      arr2.splice(i, 1);
    }
  };
  console.log(arr2);
  return arr2
}

transform(arr);

module.exports = {
  transform
};