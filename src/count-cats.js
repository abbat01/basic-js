const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let count = 0;
  let a = backyard.flat(Infinity);
  console.log(a)
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '^^') {
      count += 1
    }
  }
  return count
}

module.exports = {
  countCats
};
