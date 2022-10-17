const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let s3 = s2;
  for (let t of s1) {
    if (s3.indexOf(t) !== -1) {
      res++;
      s3 =
        s3.slice(0, s3.indexOf(t)) +
        s3.slice(s3.indexOf(t) + 1);
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};