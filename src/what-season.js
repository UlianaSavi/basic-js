const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getUTCMonth();
  } catch (e) {
    throw Error('Invalid date!');
  }

  let monthNumber = date.getUTCMonth();

  const seasons = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
    11: 'winter'
  };

  if (monthNumber >= 0 && monthNumber <= 11) return seasons[monthNumber];
  else return "Invalid date!";
}

// getSeason(date);

module.exports = {
  getSeason
};