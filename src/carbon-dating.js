const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(act) {
  if (typeof (act) !== 'number' & typeof (act) !== 'object') {
    let a = +act;
    if (a < 9000) {
      if (a < 15 & a > 0) {
        if (a !== 0) {
          if (typeof (a) === 'number') {
            let b = isNaN(a)
            if (b !== true) {

              let k = Math.log(15 / a);
              let t12 = (0.693 / 5730);
              let result = Math.ceil(k / t12)
              return result

            } else return false
          } else return false
        } else return false
      } else return false
    } else return false
  } else return false
}

module.exports = {
  dateSample
};
