const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
    let array = [];
 
    function repeatTimes() {
      let repeats = (!options.repeatTimes) ? 1 : options.repeatTimes;
      for (let i = 0; i < repeats; i++) {
        array.push(str);
      }
      return array;
    }
 
    function addSeparator(arr) {
      let separator = (!options.separator) ? '+' : String(options.separator);
      return arr.join(separator);
    }
 
    function convertToString(value) {
      if (typeof value == "undefined") return '';
      if (typeof value !== 'string') return String(value);
      return value;
    }
 
    function createAddition() {
      let additionArray = [];
      let additionContent = convertToString(options.addition);
      let additionSeparator = (!options.additionSeparator) ? '|' : String(options.additionSeparator);
      let addTimes = (!options.additionRepeatTimes) ? 1 : options.additionRepeatTimes;
 
      for (let i = 0; i < addTimes; i++) {
        additionArray.push(additionContent);
      }
 
      return additionArray.join(additionSeparator);
    }
 
    function addString(arr) {
      array = arr.map(element => element + createAddition());
    }

    repeatTimes();
    addString(array);
    return addSeparator(array);
  }

module.exports = {
  repeater
};