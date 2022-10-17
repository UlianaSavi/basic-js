const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let num = "0123456789ABCDEF";
  let result = n.split("-");
  if (result.length == 6) {
    for (let v of result) {
      for (let x of String(v)) {
        if (num.indexOf(x) == -1) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
}
module.exports = {
  isMAC48Address
};