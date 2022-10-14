const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

// const members = ['Peter', 'Adam', 'Gary', 123, 'Philip', 'Andrea', '  Evelyn', 'Evelyn', 'Kimberly', 'Denise'];

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  
  let words = members.filter(item => typeof item == 'string');
  console.log(words);

  let res = words.map(item => item.trim().toUpperCase()[0]).sort().join('');
  console.log(res);
  return res;
}

module.exports = {
  createDreamTeam
};