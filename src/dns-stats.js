const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (let arr of domains) {
    let arr2 = arr.split('.');
    let result2 = '';
    for (let i = arr2.length - 1; i >= 0; i--) {
      result2 += '.' + arr2[i];
      if (result[result2]) {
        result[result2]++;
      } else {
        result[result2] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};